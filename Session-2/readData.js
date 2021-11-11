const fs= require('fs');

console.log("Read file using sync function");

const data= fs.readFileSync("newFile.txt");

console.log(data.toString());

console.log("Read file asynchronously")
fs.readFile('data.txt','utf-8', (err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString());
    }
})