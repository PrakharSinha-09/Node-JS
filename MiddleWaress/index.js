const express=require('express')
const app=express()

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

app.use(reqFilter)


app.get('/',(req,res)=>{
    res.send("Home Page")
})

app.get('/about',(req,res)=>{
    res.send("About Page")
})

app.listen(3000)