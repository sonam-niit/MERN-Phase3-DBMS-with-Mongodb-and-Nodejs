const fs=require('fs');
console.log("write file asynchronously");
fs.writeFile("data.txt","This is the newly added data",'utf-8',(err)=>{
    if(err){
        console.log("error "+err);
    }
    else{
        console.log("data saved successfully");
    }
})

console.log("write data synchronously");

fs.writeFileSync("newFile.txt","Good Morning, Have a nice day ahead");