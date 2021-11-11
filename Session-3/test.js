const exec=require('child_process').exec;

exec('dir /c',(err,stdout,stderr)=>{
    if(err){
        console.log(err);
    }
    console.log(`stdout No od directories =${stdout}`);

    if(stderr){
        console.log(`stderr ${stderr}`)
    }
})