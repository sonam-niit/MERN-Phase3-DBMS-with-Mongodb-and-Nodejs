var fs= require('fs');
fs.open('test.txt','w+',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file opened "+data)
    }
})
// fs.open('test.txt','r',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("file opened "+data.toString())
//     }
// })