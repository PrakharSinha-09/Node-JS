const mongoose=require('mongoose')

//Creating Schema
const productSchema=new mongoose.Schema({                              
    name:String,
    price:Number,
    brand:String,
    Category:String                                                         
 })


 //Model Creation
 const ProductsModel=mongoose.model('products',productSchema)
 
 module.exports=ProductsModel                      //exported model only because, schema is inside it itseltf.