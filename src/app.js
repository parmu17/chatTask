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

var val1 = 65, val2 = 30;
io.on('connection', (socket1)=>{
  console.log('My chatTask server got a new websocket connection..'); //upon request from client page
  socket1.emit('pageUpdated1', val1, val2);
});

server.listen(port, ()=>{
  console.log(`My chatTask express server is running on localhost at port ${port}`) ;
});