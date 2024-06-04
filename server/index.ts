const express = require('express');
const cardRoute = require('./api/rest_api/routes/cards')
import {clientInfo} from './utils/ts_types'
const uuid = require('uuid');
const {playStartEventHandler, getCardsEventHandler,loginEventHandler} = require('./api/ws_api/play-event-handlers');
const http = require("http");
const WebSocket = require("ws");
const app = express();
let CLIENTS:clientInfo[] = [];
 

const server = http.createServer(app);
const webSocketServer = new WebSocket.Server({server});

const getClientfromList = (connectionId:string) =>
{
    for (let i=0; i< CLIENTS.length; i++) {
        if (CLIENTS[i].id = connectionId) {
            return CLIENTS[i];
        }
    }

}

const setClientfromList = (connectionId:string, userName:string) =>
{
    for (let i=0; i< CLIENTS.length; i++) {
        if (CLIENTS[i].id = connectionId) {
            CLIENTS[i].user = userName;
        }
    }

}



const routeEvent = (message:any, ws:any) => {
    const obj = JSON.parse(message);
    switch(obj.event) {
        case 'play-start':
            playStartEventHandler(obj);
            break;
        case 'get-cards':
            getCardsEventHandler();
            break;
        case 'login':
            loginEventHandler(obj);
            setClientfromList(ws.id, obj.payload.userName)
            ws.send(JSON.stringify({event:"login", payload: {userName: obj.payload.userName, clients: CLIENTS, status: 0, msg: 'Success'}}))
            //send - itsok
            break;
        default:
            console.log('default');
            break;
            
    }
}

webSocketServer.on('connection', (ws:any) => {
    const curId = uuid.v4();
    ws.id = curId;
    CLIENTS.push({"id":curId, "user":null})
    ws.on('message', (m:any) => {
        routeEvent(m, ws);
        //webSocketServer.clients.forEach((client:any) => client.send(m));
    });
 
    ws.on("error", (e:any) => ws.send(e));
 
     
 });

 app.use(express.urlencoded({extended: true}));
 app.use(express.json({extended: true}));

 app.use(express.static('./public'));
 //app.use(express.static(__dirname+'/public'));
 app.use('/api/cards',cardRoute);

 
server.listen(3001, ()=> console.log("Server on"));
/*app.listen(3001, ()=> {
    console.log('listening on port 3001');
})*/


 