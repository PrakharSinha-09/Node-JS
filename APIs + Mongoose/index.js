const express=require('express')
require('./config')                                                      //db connection
const Product=require('./product')                                       //schema & model

const app=express()
app.use(express.json())

app.post("/create",async (req,res)=>{                                     //route --> /create
    let data=new Product(req.body)                                        //we know to insert data(in mongoose), we create instance 
    let result=await data.save()                                          //and then save it to DB 
    res.send(result)
})

app.get("/getData",async (req,res)=>{
    let data=await Product.find()
    console.log(data) 
    res.send(data)
})

app.delete("/delete/:_id",async (req,res)=>{                              //remember to send _id and not just id and no need to include :_ in api call directly like http://localhost:5000/delete/6418b9b82567a7366eedecf1
    let data=await Product.deleteOne(req.params)                            
    console.log(data) 
    res.send(data)
})

app.put("/edit/:_id",async (req,res)=>{
    let data=await Product.updateOne(
        req.params,{$set:req.body}
        )
        res.send(data)
})

app.listen(5000)