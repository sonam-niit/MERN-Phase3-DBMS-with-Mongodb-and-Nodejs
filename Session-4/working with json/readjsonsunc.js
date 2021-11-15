const fs = require('fs');

let data= fs.readFileSync('user.json');
let users=JSON.parse(data);

console.log(users);