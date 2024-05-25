export const wsConnection = new WebSocket("ws://localhost:3001");
wsConnection.onopen = function() {
    console.log("Connection established.");
};

wsConnection.onclose = function(event) {
    if (event.wasClean) {
        console.log('Con clean end');
    } else {
        console.log('Disconnect');  
    }
    console.log('Code: ' + event.code + ' reason: ' + event.reason);
};

wsConnection.onerror = function(error:any) {
    console.log("Error " + error.message);
};

export const wsSend = function(data:any) {
    if(!wsConnection.readyState){
        setTimeout(function (){
            wsSend(data);
        },100);
    } else {
        wsConnection.send(data);
    }
};