const express=require('express')
const dbConnect=require('./mongodb')
const mongodb=require('mongodb')                          //this will helpus to convert the id in the object id
const app=express()

app.use(express.json())                                   //json is the most popular format in which we want data

//get api method to get the data from the databse
app.get('/',async(req,res)=>{
    let data=await dbConnect()
    data=await data.find().toArray()
    console.log(data)
    res.send(data)
})

//post api method to get the data from the databse
app.post('/',async(req,res)=>{
    // console.log(req.body) 
    // res.send({name:'Prakhar'})
    //Now Lets Send this data
    // res.send(req.body)

    //Now Lets See how to send/insert this data in the mongodb database...very simple as we have been doing it.
    //Step - 1
    let data=await dbConnect()
    const result=await data.insertOne(req.body)           //what comes in req.body ? it will have that data which we send via postman or react/angular etc
    res.send(result)
}) 

//put method is used to update the data, though we can update things via post method as well but it is the standard one should follow
//i.e., whenever you want to update the data, you should use put method.
app.put('/',async(req,res)=>{
    let data=await dbConnect()
    const result=await data.updateOne(
        {"name":req.body.name},{$set:{"price":req.body.price}}       //whatever was passed in the price, we updated it with that
    )
    res.send("Updated")
})


//delete method
app.delete('/:id',async(req,res)=>{
    console.log(req.params.id)
    res.send("done")
    let data=await dbConnect()
    let result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})          //We cannot use the id directly, we have to convert it first in the ObjectId, that's why imported monogdb above.

    res.send(result)
})

app.listen(5000)

//And You Will see all your data stored in the database in your browser at localhost:5000
//Make Sure to refresh the page everytime, you want to see the data.