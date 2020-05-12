const socket = io();

socket.on('pageUpdated1', (val1, val2)=>{
  console.log('the page has been updated. The values are ' + val1 + ' and ' + val2);
  //console.log(val1);
  //console.log(val2);
});

//console.log('from logic1 client script');