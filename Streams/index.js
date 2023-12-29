const express=require('express')
const statusMonitor = require('express-status-monitor');
const fs=require('fs')

const app=express()

app.use(statusMonitor())

app.get('/',(req,res)=>{
    fs.readFile('./file1.txt',(err,data)=>{
        res.end(data)
    })
    // const stream=fs.createReadStream("./file1.txt","utf-8")
    // stream.on('data',(chunk)=>res.write(chunk)) 
    // stream.on('end',()=>res.end())
})

app.listen(5000)  