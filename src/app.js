const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

const pub_folder = path.join(__dirname, '../public');

app.use(express.static(path.join(pub_folder)));

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '../public/index.htm'));
})

app.listen(port, ()=>{
  console.log(`my chat app is running on port ${port} on localhost`) ;
})