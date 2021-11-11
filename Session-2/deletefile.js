const fs=require('fs');

// fs.unlink('test.txt',(err)=>{
//     if(err){
//         console.log("error while deleting a file"+err)
//     }
//     else{
//         console.log("file deleted successfully");
//     }
// })

fs.unlinkSync('newFile.txt');
console.log("file deleted synchronously");