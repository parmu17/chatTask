const socket = io();

socket.on('page1Updated', (msg1)=>{
  console.log(msg1);
  document.getElementById('received_msg').innerHTML = msg1;
});

var recMsg1 = "Hello this is Ram";
document.querySelector('#aaa').addEventListener('click', ()=>{
  //console.log('button clicked..');
  socket.emit('myevent1', recMsg1);
})

socket.on('event1Updated', (msg2)=>{
  console.log(msg2);
  document.getElementById('received_msg').innerHTML = msg2;
  
})

document.querySelector('#form_submit1').addEventListener('submit', (e)=>{
  e.preventDefault(); //stop refreshing
  var recMsg2 = document.querySelector('input').value;
  socket.emit('myevent2', recMsg2);
})

socket.on('event2Updated', (msg3)=>{
  console.log(msg3);
  document.getElementById('received_msg').innerHTML = msg3;
})

//console.log('from logic1 client script');