const express = require('express');
const cardRoute = require('./routes/cards.ts');
const http = require("http");
const WebSocket = require("ws");
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));
app.use('/api/cards',cardRoute);

const server = http.createServer(app);
const webSocketServer = new WebSocket.Server({server});


webSocketServer.on('connection', (ws:any) => {
    ws.on('message', (m:any) => {
        console.log(m);
 webSocketServer.clients.forEach((client:any) => client.send(m));
    });
 
    ws.on("error", (e:any) => ws.send(e));
 
    ws.send('websock answer');
 });


server.listen(3001, ()=> console.log("Server on"));
/*app.listen(3001, ()=> {
    console.log('listening on port 3001');
})*/



console.log('aaaa');