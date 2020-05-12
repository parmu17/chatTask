const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const pub_folder = path.join(__dirname, '../public');
app.use(express.static(path.join(pub_folder)));

var msg1 = "Hello there, Most welcome in chat application";
io.on('connection', (socket)=>{
  console.log('My chatTask server got a new websocket connection..'); //upon request from client page
  socket.emit('page1Updated', msg1);  //sending event
  
  socket.on('myevent1', (recMsg1)=>{  //receiving event
    console.log(recMsg1);
    var msg2 = "I received your message that says '" + recMsg1 + "'" ;
    //io.emit('pageUpdated1', msg1); //update for all clients
    socket.emit('event1Updated', msg2); //update only for requested client
  })
  
  socket.on('myevent2', (recMsg2)=>{
    console.log(recMsg2);
    var msg3 =  "I received your message that says '" + recMsg2 + "'" ;
    socket.emit('event2Updated', msg3);
  })

});

server.listen(port, ()=>{
  console.log(`My chatTask express server is running on localhost at port ${port}`) ;
});