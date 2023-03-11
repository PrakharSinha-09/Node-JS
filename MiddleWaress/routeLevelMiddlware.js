//Lets See How to work with route level middleware
//when we are concerned to apply middleware to a specific route, group of route, or even all the routes, we use this route level middleware
const express=require('express')
const app=express()
const route=express.Router()         

//Lets See How To Create Middlewares...this is basic midleware(Application Level Middleware) where we are applying middleware to all the routes
const reqFilter=(req,res,next)=>{
    if(!req.query.age)
    {
        res.send("Please Provide Age")
    }
    else if(req.query.age<18)
    {
        res.send("You Cannot Access This Page")
    }
    else{
        next()
    }
}

// app.use(reqFilter)    ..we won't do this in route level middleware

route.use(reqFilter)                //don't forget to add this...pass middleware inside ;)

// app.get('/',reqFilter,(req,res)=>{                  //applied middleware only at home page by passing middleware's name as second arg.
//     res.send("Home Page")                           //but this is not efficient as we have to write same in which ever route we want middleware.
// })                                                  //for this we have to use express.Router() well known as creating router instance.

route.get('/',(req,res)=>{
    res.send("Home Page")
})

app.get('/about',(req,res)=>{
    res.send("About Page")
})
app.get('/contact',(req,res)=>{
    res.send("Contact Page")
})

app.use('/',route)                                      //Don't forget to add this, second argument is Router instance and not the middleware name

//In A Nutshell, if we want to apply middleware, use route.get otherwise app.get

app.listen(3000)