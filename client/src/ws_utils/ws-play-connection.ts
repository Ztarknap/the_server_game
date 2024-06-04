export const wsConnection = new WebSocket("ws://localhost:3001");
 
wsConnection.onopen = () => {
    console.log("Connection established.");
};

wsConnection.onclose = (event) => {
    if (event.wasClean) {
        console.log('Con clean end');
    } else {
        console.log('Disconnect');  
    }
    console.log('Code: ' + event.code + ' reason: ' + event.reason);
};

wsConnection.onerror = (error:any) => {
    console.log("Error " + error.message);
};

export const wsSend = (data:any) => {
    if(!wsConnection.readyState){
        setTimeout(function (){
            wsSend(data);
        },100);
    } else {
        wsConnection.send(data);
    }
};