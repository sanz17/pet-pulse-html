function startConnectT() {
    clientID = "petpulse#1234@455";
    host = "test.mosquitto.org";
    port = 8081;
    // userId  = document.getElementById("username").value;  
    // passwordId = document.getElementById("password").value;  
    document.getElementById("messages").innerHTML += "<span> Connecting... </span><br>"
    // document.getElementById("messages").innerHTML += "<span> Using the client Id " + clientID + " </span><br>";
    client = new Paho.Client(host, Number(port), clientID);
    client.onConnectionLost = onConnectionLostT;
    client.onMessageArrived = onMessageArrivedT;
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
    document.getElementById("messagesLat").innerHTML += "<span> Connecting... </span><br>";
    // document.getElementById("messages").innerHTML += "<span> Using the client Id " + clientID + " </span><br>";
    client = new Paho.Client(host, Number(port), clientID);
    client.onConnectionLost = onConnectionLostLat;
    client.onMessageArrived = onMessageArrivedLat;
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
    document.getElementById("messagesLong").innerHTML += "<span> Connecting... </span><br>";
    // document.getElementById("messages").innerHTML += "<span> Using the client Id " + clientID + " </span><br>";
    client = new Paho.Client(host, Number(port), clientID);
    client.onConnectionLost = onConnectionLostLong;
    client.onMessageArrived = onMessageArrivedLong;
    client.connect({
        // 'timeout': 10,
        // 'keepAliveInterval': 20,
        // 'cleanSession': true,
        // 'useSSL': false,
        'onSuccess': onConnectLong
    });
}

function startConnectActivity() {
    clientID = "petpulse#1234@455";
    host = "test.mosquitto.org";
    port = 8081;
    // userId  = document.getElementById("username").value;  
    // passwordId = document.getElementById("password").value;  
    document.getElementById("messagesMot").innerHTML += "<span> Connecting... </span><br>";
    // document.getElementById("messages").innerHTML += "<span> Using the client Id " + clientID + " </span><br>";
    client = new Paho.Client(host, Number(port), clientID);
    client.onConnectionLost = onConnectionLostMot;
    client.onMessageArrived = onMessageArrivedMot;
    client.connect({
        // 'timeout': 10,
        // 'keepAliveInterval': 20,
        // 'cleanSession': true,
        // 'useSSL': false,
        'onSuccess': onConnectActivity
    });
}


function onConnectT() {
    topic = "pet123-tem"

    document.getElementById("messages").innerHTML += "<span> Showing body temperature... </span><br>";

    client.subscribe(topic);
}

function onConnectLat() {
    topic = "pet123-lat"

    document.getElementById("messagesLat").innerHTML += "<span> Showing latitude... </span><br>";

    client.subscribe(topic);
}

function onConnectLong() {
    topic = "pet123-lon"

    document.getElementById("messagesLong").innerHTML += "<span> Showing longitude... </span><br>";

    client.subscribe(topic);
}

function onConnectActivity() {
    topic = "pet123-mot"

    document.getElementById("messagesMot").innerHTML += "<span> Showing activity... </span><br>";

    client.subscribe(topic);
}



function onConnectionLostT(responseObject) {
    document.getElementById("messages").innerHTML += "<span> ERROR: Connection is lost.</span><br>";
    if (responseObject != 0) {
        document.getElementById("messages").innerHTML += "<span> ERROR: " + responseObject.errorMessage + "</span><br>";
    }
}

function onMessageArrivedT(message) {
    console.log("OnMessageArrived: " + message.payloadString);
    document.getElementById("messages").innerHTML += "<span> Showing:" + message.destinationName + "| Message : " + message.payloadString + "</span><br>";
}


function onConnectionLostLat(responseObject) {
    document.getElementById("messagesLat").innerHTML += "<span> ERROR: Connection is lost.</span><br>";
    if (responseObject != 0) {
        document.getElementById("messagesLat").innerHTML += "<span> ERROR: " + responseObject.errorMessage + "</span><br>";
    }
}

function onMessageArrivedLat(message) {
    console.log("OnMessageArrived: " + message.payloadString);
    document.getElementById("messagesLat").innerHTML += "<span> Showing:" + message.destinationName + "| Message : " + message.payloadString + "</span><br>";
}

function onConnectionLostLong(responseObject) {
    document.getElementById("messagesLong").innerHTML += "<span> ERROR: Connection is lost.</span><br>";
    if (responseObject != 0) {
        document.getElementById("messagesLong").innerHTML += "<span> ERROR: " + responseObject.errorMessage + "</span><br>";
    }
}

function onMessageArrivedMot(message) {
    console.log("OnMessageArrived: " + message.payloadString);
    document.getElementById("messagesMot").innerHTML += "<span> Showing:" + message.destinationName + "| Message : " + message.payloadString + "</span><br>";
}

function onConnectionLostMot(responseObject) {
    document.getElementById("messagesMot").innerHTML += "<span> ERROR: Connection is lost.</span><br>";
    if (responseObject != 0) {
        document.getElementById("messagesMot").innerHTML += "<span> ERROR: " + responseObject.errorMessage + "</span><br>";
    }
}

function onMessageArrivedLong(message) {
    console.log("OnMessageArrived: " + message.payloadString);
    document.getElementById("messagesLong").innerHTML += "<span> Showing:" + message.destinationName + "| Message : " + message.payloadString + "</span><br>";
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