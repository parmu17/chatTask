const express = require('express');
const http = require('http');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

const server = http.createServer();

const pub_folder = path.join(__dirname, '../public');
app.use(express.static(path.join(pub_folder)));

app.listen(port, ()=>{
  console.log(`my chat app is running on port ${port} on localhost`) ;
})