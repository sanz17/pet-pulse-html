function startConnectT() {
    clientID = "petpulse#1234@455";
    host = "test.mosquitto.org";
    port = 8081;
    // userId  = document.getElementById("username").value;  
    // passwordId = document.getElementById("password").value;  
    document.getElementById("messages").innerHTML += "<span> Connecting to " + host + "on port " + port + "</span><br>";
    document.getElementById("messages").innerHTML += "<span> Using the client Id " + clientID + " </span><br>";
    client = new Paho.Client(host, Number(port), clientID);
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.connect({
        // 'timeout': 10,
        // 'keepAliveInterval': 20,
        // 'cleanSession': true,
        // 'useSSL': false,
        'onSuccess': onConnectT
    });
}

function startConnectLat() {
    clientID = "petpulse#1234@455";
    host = "test.mosquitto.org";
    port = 8081;
    // userId  = document.getElementById("username").value;  
    // passwordId = document.getElementById("password").value;  
    document.getElementById("messages").innerHTML += "<span> Connecting to " + host + "on port " + port + "</span><br>";
    document.getElementById("messages").innerHTML += "<span> Using the client Id " + clientID + " </span><br>";
    client = new Paho.Client(host, Number(port), clientID);
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.connect({
        // 'timeout': 10,
        // 'keepAliveInterval': 20,
        // 'cleanSession': true,
        // 'useSSL': false,
        'onSuccess': onConnectLat
    });
}

function startConnectLong() {
    clientID = "petpulse#1234@455";
    host = "test.mosquitto.org";
    port = 8081;
    // userId  = document.getElementById("username").value;  
    // passwordId = document.getElementById("password").value;  
    document.getElementById("messages").innerHTML += "<span> Connecting to " + host + "on port " + port + "</span><br>";
    document.getElementById("messages").innerHTML += "<span> Using the client Id " + clientID + " </span><br>";
    client = new Paho.Client(host, Number(port), clientID);
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.connect({
        // 'timeout': 10,
        // 'keepAliveInterval': 20,
        // 'cleanSession': true,
        // 'useSSL': false,
        'onSuccess': onConnectLong
    });
}


function onConnectT() {
    topic = "pet123-tem"

    document.getElementById("messages").innerHTML += "<span> Subscribing to topic " + topic + "</span><br>";

    client.subscribe(topic);
}

function onConnectLat() {
    topic = "pet123-lat"

    document.getElementById("messages").innerHTML += "<span> Subscribing to topic " + topic + "</span><br>";

    client.subscribe(topic);
}

function onConnectLong() {
    topic = "pet123-long"

    document.getElementById("messages").innerHTML += "<span> Subscribing to topic " + topic + "</span><br>";

    client.subscribe(topic);
}



function onConnectionLost(responseObject) {
    document.getElementById("messages").innerHTML += "<span> ERROR: Connection is lost.</span><br>";
    if (responseObject != 0) {
        document.getElementById("messages").innerHTML += "<span> ERROR:" + responseObject.errorMessage + "</span><br>";
    }
}

function onMessageArrived(message) {
    console.log("OnMessageArrived: " + message.payloadString);
    document.getElementById("messages").innerHTML += "<span> Topic:" + message.destinationName + "| Message : " + message.payloadString + "</span><br>";
}

function startDisconnect() {
    client.disconnect();
    document.getElementById("messages").innerHTML += "<span> Disconnected. </span><br>";
}

function publishMessage() {
    msg = document.getElementById("Message").value;
    topic = document.getElementById("topic_p").value;

    Message = new Paho.MQTT.Message(msg);
    Message.destinationName = topic;

    client.send(Message);
    document.getElementById("messages").innerHTML += "<span> Message to topic " + topic + " is sent </span><br>";


}