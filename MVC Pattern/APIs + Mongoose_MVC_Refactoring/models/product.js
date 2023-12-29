//In nmvc pattern, this is models folder so, we will put our schema/model here

const mongoose=require('mongoose')

//Creating Schema
const productSchema=new mongoose.Schema({                              
    // name:String,
    // price:Number,
    // brand:String,
    // Category:String      
    
    name:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    brand:{
        type:String,
        required:true
    },

    Category:{
        type:String,
        required:true
    },
 },{timestamps:true})


 //Model Creation
 const ProductsModel=mongoose.model('products',productSchema)
 
 module.exports=ProductsModel                      //exported model only because, schema is inside it itseltf.