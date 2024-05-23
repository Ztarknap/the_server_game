export const Play = () => {
    
    const wsConnection = new WebSocket("ws://localhost:3001");
    wsConnection.onopen = function() {
        alert("Connection established");
    };

    wsConnection.onclose = function(event) {
        if (event.wasClean) {
            alert('Connection was closed clean');
        } else {
            alert('Connection crash');  
        }
        alert('Code: ' + event.code + ' reason: ' + event.reason);
    };

    wsConnection.onerror = function(error:any) {
        alert("error " + error.message);
    };

    const wsSend = function(data:any) {
    // readyState - true, если есть подключение
        if(!wsConnection.readyState){
            setTimeout(function (){
                wsSend(data);
            },100);
        } else {
            wsConnection.send(data);
        }
    };
    wsSend('ads');
    return(
        <div>
            play
        </div>
    )
}