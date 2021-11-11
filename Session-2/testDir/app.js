const path= require('path');

console.log("Directory Name: "+__dirname);
console.log("File Name: " +__filename);

const PATH= __filename;

const file=path.basename(PATH);

console.log("Base File Name: "+file);

const extn=path.extname(PATH);

console.log("Extention "+extn);
