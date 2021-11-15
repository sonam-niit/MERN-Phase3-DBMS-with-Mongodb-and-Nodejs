const express=require('express');
const app=express();

app.get('/url',(req,res,next)=>{
    res.json([
        {"id":101,"fname":"sonam","lname":"soni","email":"sonam@gmail.com"},
        {"id":102,"fname":"sonam","lname":"soni","email":"sonam@gmail.com"},
    ]);
})

app.listen(3000,()=>{
    console.log("server started")
})