const http  = require('http');// use http module
const fs = require('fs/promises');
require('dotenv').config();
//process.env
const PORT = 8000;
console.log("hii");
const server = http.createServer(async (req,res)=>{
  // if(req.url == "/home"){
  //   let data =await fs.readFile('./homePage.html',{encoding:'utf-8'});
  //   res.end(data);
  // }else if(req.url == "/contact"){
  //   let data =await fs.readFile('./contactUs.html',{encoding:'utf-8'});
  //   res.end(data);
  // }
  // else{
  //   return res.end('No Page found');
  // }

  let body = '';
  req.on('data',(chunk)=>{
    body = body+chunk;
  });

  req.on('end',()=>{
      console.log('data recieived');
      console.log(body);
      //read and write it will send the data
      return res.end('data recieved');
  });
});
function justSayHello(){
  console.log('hello');
  console.log('hi');
}

server.listen(PORT,(err) =>{
  if(err){
    console.log('error',err);
    return;
  }
  console.log("My Server has started At PORT",PORT);
});

//localhost 127.0.0.1
