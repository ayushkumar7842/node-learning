const http  = require('http');// use http module

const PORT = 8000;
console.log("hii");
const server = http.createServer((req,res)=>{
    //from req  i will found who is the user
    //let user
    let user = "vikas";
    let content = "";
    if(user == "vikas"){
      content =   "<h1>Welcome Vikas1";
    }
    if(user == "vishaka"){
        content = "<h1> Hi Vishaka</h1>";
    }
    console.log("inside code1");
   return res.end(content);
});

server.listen(PORT);
console.log("My Server has started At PORT",PORT);
//localhost 127.0.0.1
