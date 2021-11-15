const fs = require('fs');

let data= fs.readFile('user.json',(err,data)=>{
    if(err)
    console.log(err);
    else
    {
        let users=JSON.parse(data)
        console.log(users);
    }

})

