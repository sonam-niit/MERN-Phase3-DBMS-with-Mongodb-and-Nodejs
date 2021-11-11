const fs= require('fs');

fs.open('data.txt','r+',(err,fd)=>{
    if(err){
        console.log("error while opening a file "+err);
    }
    
        console.log("file opened successfully");
        console.log("reading a file");
        fs.readFile('data.txt','utf-8',(err,data)=>{
            if(err){
                console.log("error while reading a file "+err)
            }
            console.log(data);

            fs.close(fd,(err)=>{
                if(err)
                console.log("error while closing file "+err)
                else
                console.log("file closed successfully");
            })

        })

    
    
})