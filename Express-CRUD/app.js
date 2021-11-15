const express=require('express');
const productController=require("./ProductController");
const bodyParser=require('body-parser').json();
const server=express();

server.get("",(req,res)=>{
    res.send("application strated")
})
server.use(bodyParser);

server.use("/api/product",productController);
server.listen(3000,()=>{
    console.log("server started");
})