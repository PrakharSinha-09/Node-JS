const express=require('express')
const app=express()

//Setting the template or view engine
app.set('view engine','ejs')     //This line of code: app.set('view engine', 'ejs'), tells our express application that we want to use EJS as our template engine or view engine.

app.get('/profile',(req,res)=>{
    const user={
        name:'Prakhar Sinha',
        email:'prakhar.sinha2k2@gmail.com',
        city:'Bhadohi'
    }
    res.render('profile',{user})
})

app.listen(4000)