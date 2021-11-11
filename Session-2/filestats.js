const fs=require('fs');

fs.stat('newFile.txt',(err,stats)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(stats);
        console.log('is File? '+stats.isFile());
        console.log('is Directory? '+stats.isDirectory());
    }
})