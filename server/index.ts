const express = require('express');
const cardRoute = require('./api/rest_api/routes/cards')
const {playStartEventHandler, getCardsEventHandler} = require('./api/ws_api/play-event-handlers');
const http = require("http");
const WebSocket = require("ws");
const app = express();

 

const server = http.createServer(app);
const webSocketServer = new WebSocket.Server({server});

const routeEvent = (message:any) => {
    const obj = JSON.parse(message);
    switch(obj.event) {
        case 'play-start':
            playStartEventHandler(obj);
            break;
        case 'get-cards':
            getCardsEventHandler();
            break;
        default:
            console.log('default');
            break;
            
    }
}

webSocketServer.on('connection', (ws:any) => {
    ws.on('message', (m:any) => {
        console.log(m.toString());
        routeEvent(m);
        webSocketServer.clients.forEach((client:any) => client.send(m));
    });
 
    ws.on("error", (e:any) => ws.send(e));
 
    ws.send('websock answer');
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


 