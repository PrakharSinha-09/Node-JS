const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/e-comm")                     //Connencting MongoDb
const productSchema=new mongoose.Schema({                                //Creating schema
    name:String,
    price:Number,
    brand:String,
    Category:String                                                         
 })

const saveInDB=async ()=>{

    const ProductsModel=mongoose.model('products',productSchema)            

    let data=new ProductsModel({name:"OnePlus 10",price:400002,"brand":"OnePlus","Category":"Mobile"})                       
    let result=await data.save()                                           

    console.log(result)
}

const updateInDB=async()=>{
    const Product=mongoose.model('products',productSchema)
    let data=await Product.updateOne(
        {name:"OnePlus 10"},{$set:{price:50000}}
    )

    console.log(data)
}

const deleteInDB=async()=>{
    const Product=mongoose.model('products',productSchema)
    let data=await Product.deleteOne({name:"OnePlus 10"})

    if(data.acknowledged)
    {
        console.log("Data Deleted Successfully!")
    }
}

const findInDB=async ()=>{
    const Product=mongoose.model('products',productSchema)
    let data=await Product.find()                                               //to get all the data in database
    // let data=await Product.find({"name":"OnePlus 11"})                      //to get specific data which has name OnePlus 11..just pass whatever you want in the parameter as object
    console.log(data)
}

// saveInDB()
// updateInDb()
// deleteInDB()
findInDB()