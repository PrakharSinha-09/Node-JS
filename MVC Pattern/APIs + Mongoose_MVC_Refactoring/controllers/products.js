//in controllers, we have functions that we attach to the routes

const Product=require('../models/product')

async function getAllProducts(req,res){
    let data=await Product.find()
    console.log(data) 
    return res.send(data)
}

async function getProductById(req,res){
    let id=Number(req.params.id)
    const productById=Product.find((product)=>{
        return product.id===id
    })
    return res.json(productById)
}

async function createProduct(req,res){
    let data=new Product(req.body)                                        //we know to insert data(in mongoose), we create instance 
    let result=await data.save()                                          //and then save it to DB 
    return res.json(result)
}

async function deleteProductById(req,res){
    let data=await Product.deleteOne({_id:req.params.id})                            
    console.log(data) 
    return res.json(data)
}

async function editProductById(req,res){
    let data=await Product.updateOne( 
        req.params,{$set:req.body}                                        //since req.params is already an object, so wrroutering it inside { } will throw error.
    )
    return res.json(data)
}


module.exports={
    getAllProducts,
    getProductById,
    createProduct,
    deleteProductById,
    editProductById
}