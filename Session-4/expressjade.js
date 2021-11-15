const express=require('express');
const app=express();

app.set("view engine","jade")
app.get('/',(req,res)=>{
    res.render('sample');
})

app.listen(3000,()=>{
    console.log('Server started')
})