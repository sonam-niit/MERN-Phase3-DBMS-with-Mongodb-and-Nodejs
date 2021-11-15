const express= require ('express');

const app=express();

const port=3000;

app.get('/', (req,res)=>{
    res.send('Hello World');
})

app.get('/people', (req,res)=>{
    res.send('Hello World from people');
})

app.use(express.static('public'))
// app.use(express.static('files'))
app.listen(port,()=>{console.log('server strated')})