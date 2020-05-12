const socket = io();
socket.on('pageUpdated1', ()=>{
  console.log('the page has been update');
});

//console.log('from logic1 client script');