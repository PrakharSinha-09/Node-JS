//Mongoose is a npm package through which we can connect our mongodb database with nodejs just like we have previously used mongodb npm package
//the difference is that, mongoose provides additional functionalities like schema creation, validation etc which traditional mongodb package
//doesn't provide.

//the Step - 1 is to get the mongoose installed and import it here like this
const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({                                //creating schema
    name:String                                                          //one field named 'name' added in schema
 })

const main=async ()=>{
    //Step - 2
    await mongoose.connect("mongodb://localhost:27017/e-comm")               //e-comm is the name of database

    const ProductsModel=mongoose.model('products',productSchema)             //first argument is the name of the collection, other is the schema
    
    //Adding data, whenever adding new data, you have to create an instance, shown below!

    let data=new ProductsModel({name:"OnePlus 11"})                          //Since we have only defined name in schema, if we try to add here some more, it won't get added in database
    let result=await data.save()                                            //To Save The changes in database

    console.log(result)
}

main()


//now after understanding basics lets do crud operations using it so that we can get the good understanding!