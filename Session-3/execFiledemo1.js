const {execFile}=require('child_process');

const child =execFile('node',['test.js'],(err,stdout,stderr)=>{
    if(err){
        console.log(err);
    }
    console.log(`stdout No od directories =${stdout}`);

    if(stderr){
        console.log(`stderr ${stderr}`)
    }
})