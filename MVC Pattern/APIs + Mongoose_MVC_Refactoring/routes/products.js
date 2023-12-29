//So, here one important thing come up, there we were using router.get, router.post like things to create routes
//now, we are going to router level, where we will make seperate router for the user
//to achieve this thing, we need one thing and that is the router, which is provided by
//express.Router()

const express=require('express')

const router=express.Router()
const Product=require('./models/product')  

const { getAllProducts, getProductById, createProduct, deleteProductById, editProductById }=require('../controllers/products')                                     //schema & model

//now, by using this router we can create our routes, so lets get all our routes written in index.js
//here and replace all router via router... lets do it

router.get("/getData",getAllProducts)

router.get("/getData/:id",getProductById)

router.post("/create",createProduct)

router.delete("/delete/:id",deleteProductById)

router.put("/edit/:_id",editProductById)


//one things we can notice is every route is around products right, so is there anyway, we can pass
//this products one time and then whatever request being made products get preced in the request.
//So, what I meant is that we have a route /products/create and many other you can see above
//what we can do is since we know every route is around products right, so in our main i.e.,
//index.js file:
//firstly we will import this file there --> const productsRouter=require('./routes/products.js')
//and then write app.use('/products',productsRouter) 
// which will mean that if any request comes on to the /products , for this use productsRouter
//now, we don't need to write /products anywhere in the products.js which is inside routes

//and finally export this router so, that you can use it!
module.exports=router