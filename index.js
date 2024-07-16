const http  = require('http');// use http module
const fs = require('fs/promises');

const PORT = 8000;
console.log("hii");
const server = http.createServer(async (req,res)=>{
  if(req.url == "/home"){
    let data =await fs.readFile('./homePage.html',{encoding:'utf-8'});
    res.end(data);
  }else if(req.url == "/contact"){
    let data =await fs.readFile('./contactUs.html',{encoding:'utf-8'});
    res.end(data);
  }
  // if(req.method == "GET"){
  //   return res.end('I AM GET Method');
  // } else if(req.method == "POST"){
  //   return res.end('I AM POST METHOD');
  else{
    return res.end('No Page found');
  }
});
function justSayHello(){
  console.log('hello');
  console.log('hi');
}

server.listen(PORT);
console.log("My Server has started At PORT",PORT);
//localhost 127.0.0.1
