const fs=require('fs');

let user={
    "id":104,
    "fname":"eman",
    "lname":"eman",
    "email":"eman@123.com"
}

let data=JSON.stringify(user);
// fs.writeFileSync('user.json',data);

fs.writeFile('user.json',data,(err)=>{
    if(err) throw err;
    console.log("data written successfully");
})

console.log("after function");
