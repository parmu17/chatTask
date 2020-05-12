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

io.on('connection', (socket)=>{
  console.log('new client connected')
  socket.emit('event1', "Most Welcome.."); //to every one upon connection,( event1)
  socket.broadcast.emit('event1', 'A new user joined conversation') //for every one except the new client, (event1)
  
  socket.on('event2', (msg2)=>{
    console.log(msg2);
    var msg3 = "Your fried wrote '" + msg2 + "', yours sincerely server.."
    io.emit('event1', msg3);  //group conversation
  })

  socket.on('disconnect', ()=>{
    io.emit('event1', "A user has left conversation");
  })
})

server.listen(port, ()=>{
  console.log(`My chatTask express server is running on localhost at port ${port}`) ;
});