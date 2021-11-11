//const { ChildProcess } = require('child_process');
const cluster=require('cluster');
const http=require('http');

const numCPUs=require('os').cpus().length;
console.log()
if(cluster.isMaster){
    masterProcess();
}else{
    childProcess();
}

function masterProcess(){
    console.log(`Master ${process.pid} is running`);

    for(let i=0;i<numCPUs;i++){
        console.log(`forking Process number ${i}....`)
        cluster.fork();
    }

    process.exit();
}

function childProcess(){
    console.log(`Worker ${process.pid} started and finished`);

    process.exit();
}