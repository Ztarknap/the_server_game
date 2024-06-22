const express = require('express');
const cardRoute = require('./api/rest_api/routes/cards')
import {clientInfo} from './utils/ts_types'
const uuid = require('uuid');
const {playStartEventHandler, getCardsEventHandler,loginEventHandler, inviteEventHandler} = require('./api/ws_api/play-event-handlers');
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
        if (CLIENTS[i].id == connectionId) {
            CLIENTS[i].user = userName;
        }
    }

}

const delClientFromList = (connectionId:string) =>
{
    for (let i=0; i< CLIENTS.length; i++) {
        if (CLIENTS[i].id == connectionId) {
            CLIENTS.splice(i, 1);
        }
    }

}



const routeEvent = (obj:any, ws:any) => {
    console.log('aliiivecounter', ws.aliveCounter);
    if (ws.aliveCounter <3) {
        ws.aliveCounter++;
    }
    switch(obj.event) {
        case 'play-start': {
            playStartEventHandler(obj);
            break;
        }
        case 'get-cards': {
            getCardsEventHandler();
            break;
        }
        case 'login': {
            loginEventHandler(obj);
            setClientfromList(ws.id, obj.payload.userName);
            console.log('client added');
            console.log(CLIENTS);
            //nujna zapis IDshnika
            ws.send(JSON.stringify({event:obj.event, payload: {id: ws.id, clients: CLIENTS, status: 0, msg: 'Success'}}))
            //send - itsok
            break;
        }
        case 'invite': {
            let wsClients = webSocketServer.clients;
            let targetClient:any;
            for (let client of wsClients) {
                if (client.id == obj.payload.id) {
                    targetClient = client;
                    break;
                }
            }
            //is not a function
            //let targetWebSocketServer = wsClients.find((wss: any) => wss.value.id = obj.payload.id);
            console.log('aa');
            targetClient.send(inviteEventHandler(obj));
        }
            //ws.send(inviteEventHandler(obj));
        case 'refreshInvite': {
            ws.send(JSON.stringify({event: obj.event, payload: {id: ws.id, clients: CLIENTS, status: 0, msg: 'Success'}}))
            break;
        }
            
        default:
            console.log('default');
            break;
            
    }
}

webSocketServer.on('connection', (ws:any) => {
    const curId = uuid.v4();
    let aliveCounter = 3;
    ws.id = curId;
    ws.aliveCounter = aliveCounter;
    CLIENTS.push({"id":curId, "user":null})
    console.log('new client!');
    console.log(CLIENTS);
    const keepAlive = setInterval(() => {
        console.log('interval fire');
        ws.aliveCounter--;
        console.log(ws.aliveCounter);
        if(ws.aliveCounter <0) {
            ws.terminate();
            delClientFromList(ws.id);
            console.log('terminated', CLIENTS);
            clearInterval(keepAlive);
            return;
        }
        console.log('seeending');
        ws.send(JSON.stringify({event: 'keepAlive', payload: {status: 0, msg: 'Success'}}));
    }, 5000)
    ws.on('message', (m:any) => {
        console.log('gotmsg');
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

 
server.listen(3001, ()=> {
    console.log("Server on"); });
/*app.listen(3001, ()=> {
    console.log('listening on port 3001');
})*/


 