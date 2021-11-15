const express=require('express');

const app=express();

app.get("/",(req,res)=>{
    res.end("welcome to express");
})

app.get("/user",(req,res)=>{
    res.json([
        {"id":101,"fname":"sonam","lname":"soni","email":"sonam@gmail.com"},
        {"id":102,"fname":"sonam","lname":"soni","email":"sonam@gmail.com"},
    ]);
})

app.get("/people",(req,res)=>{
    res.json([
        {"eid":101,"ename":"sonam","email":"sonam@gmail.com"},
        {"eid":102,"ename":"sonam","email":"sonam@gmail.com"},
    ]);
})
app.get("/users/:eid",(req,res,next)=>{
    console.log("sending from one function to another")
   // res.send(req.params);
    next();
}, (req,res)=>{res.send("another callback")})

app.listen(3000,()=>{console.log("server started")})