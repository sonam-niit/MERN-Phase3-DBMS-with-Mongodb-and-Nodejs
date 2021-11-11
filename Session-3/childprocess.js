const {spawn} =require('child_process');

const child= spawn('dir',['F:/Sonam Data']);

child.stdout.on('data',(data)=>{
    console.log(`standard output: ${data}`);
})

child.stderr.on('data',(data)=>{
    console.log(`standard error ${data}`)
})

child.on('close',(code)=>{
    console.log(`child process closed with code ${code}`)
})