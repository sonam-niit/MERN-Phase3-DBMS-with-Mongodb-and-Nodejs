const fs=require('fs');

const dirName="testDir";

try{
    if(!fs.existsSync(dirName)){
        fs.mkdirSync(dirName)
        console.log("directory created")
    }
    else{
        throw new Error("Directory already exist..!!!")
    }
}
catch(err){
    console.log("Error while creating directory "+err);
}