const checkFile= function (arg,callback){
    if(typeof arg !== "number")
        return callback('not a number');
    callback(null,'yess it is a number')
}

function test(err,data){
    if(err){
        console.log(err)
    }
    else{
      console.log(data);  
    }
}

checkFile('A',test)