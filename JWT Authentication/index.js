const express=require('express')
const jwt=require('jsonwebtoken')

const app=express()
app.use(express.json())                            //we know this write, whenever we want to access the body in api hitting we have to ensure that, this middleware is getting used

const secretKey="secretkey"

app.get('/',(req,res)=>{
    res.json({
        message:"Sample API"
    })
})

app.post('/login',(req,res)=>{
    console.log()
    const user={
        id:req.body.id, 
        username:req.body.name,
        email:req.body.email
    }
    jwt.sign({user},secretKey,{expiresIn:'300s'},(err,token)=>{
        res.json({
            token
        })
    })
})

app.post('/profile',verifyToken,(req,res)=>{
    jwt.verify(req.token,secretKey,(err,authData)=>{
        if(err){
            res.send({result:"Invalid Token"})
        }
        else{
            res.json({
                message:"Profile Accessed",
                authData
            })
        }
    })
})

function verifyToken(req,res,next){
    const authToken=req.headers['authorization']                        //authToken will have authenticationTokenn value right 
    console.log(authToken)

    if(typeof authToken!=='undefined')
    {
        const token=authToken                                             
        req.token=token
        next()                                                            //what next() will do is that it will pass the control of this function to the api /profile
    }
    else{
        res.send({
            result:"Token isn't Valid"
        })
    }
}

app.listen(5000,()=>{
    console.log("App is running on port http://localhost:5000")
})