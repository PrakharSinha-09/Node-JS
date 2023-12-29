const express=require('express')

const { connectMongoDb } =require('./config')
const productRouter=require('./routes/products')

const app=express()
app.use(express.json())

//Connection
connectMongoDb("mongodb://localhost:27017/e-comm").then(()=>console.log('MongoDb Connection Successful!'))
.catch((err)=>{console.log('Connection Failed', err)})

//Routes
//any request coming on to the products, i will send it to productRouter as said earlier.. see routes folder
app.use('/products',productRouter)



app.listen(5000)