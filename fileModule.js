
//reading a file
const fs = require('fs');
const fs_promise = require('fs/promises');
const path = require('path');

//fs.readFile  // asynchrounous
//fs.readFileSync // -->synchronous
const filePath = path.join(__dirname,'index.html');
console.log('filePath',filePath);

 //synchronous way to read file
// const data = fs.readFileSync(filePath,{encoding:'utf-8'});
// console.log('data',data);
// console.log('last-line-executed');

// using callback
// fs.readFile(filePath,{encoding:'utf-8'},(err,data)=>{
//     if(err){
//         console.log('error',err);
//         return;
//     }

//     console.log('data',data);
//     fs.writeFile('./index2.html',data,(err,data)=>{
//         if(err){
//             console.log('error while writing',err);
//             return;
//         }
//     })
// });
// //error
// //file create then write

//using promises
// fs_promise.readFile(filePath,{encoding:'utf-8'})
//     .then((data) => {
//         console.log('data',data);
//         return fs_promise.writeFile('./index2.html',data);
//     }).then((data) => {
//         console.log('written succesfully');
//     })
//     .catch((err)=>{
//         console.log("err",err);
//     })

// console.log('last-line');

//async-await
async function readAndWriteFile(readFilePath,writeFilePath){
    try {
        let dataToWrite = await fs_promise.readFile(readFilePath,{encoding:'utf-8'});
        await fs_promise.appendFile(writeFilePath,dataToWrite);
        await fs_promise.appendFile(writeFilePath,dataToWrite);
        console.log('read-write-operation-success');
    } catch (error) {
        console.log('error',error);
        
    }
}

readAndWriteFile(filePath,'./index2.html');

console.log('last-line');