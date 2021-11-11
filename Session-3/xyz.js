process.on('message',(m)=>{
    console.log('child process ',m)
})

process.send({hello:'from child'});