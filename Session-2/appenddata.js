const fs=require('fs');

// console.log("append data asynchronously ")
// fs.appendFile('data.txt','Hii new data to append.',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("data appended successfully.")
//     }
// })

console.log("append data synchronously ");

fs.appendFileSync('data.txt',"appending with sync");