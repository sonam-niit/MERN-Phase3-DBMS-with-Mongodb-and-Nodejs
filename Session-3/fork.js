var cp= require('child_process');

var child=cp.fork(__dirname+'/xyz.js');

child.on('message',(m)=>{
    console.log('Parent process '+m);
})

child.send({hello:'from parent'});

child.on('close',(code)=>{
    console.log(`child process exited with code ${code}`)
})