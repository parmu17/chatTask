const socket = io();

socket.on('pageUpdated1', (val1, val2)=>{
  console.log('the page has been updated. The values are ' + val1 + ' and ' + val2);
});

document.querySelector('#aaa').addEventListener('click', ()=>{
  console.log('button clicked..');
  socket.emit('myevent1');
})

//console.log('from logic1 client script');