const express=require('express')

const app=express()

//Now, we are ready to create routes
app.get('',(req,res)=>{                            //this 'get' is a http routing method
    res.send(`<h1>Welcome TO Home Page</h1>
                <input type="text" placeholder="Enter Your Name">
                <button style="background-color:blue;">dw</button>
    `)

})

//about
app.get('/about',(req,res)=>{
    console.log(req.query.name)              //use of req, whenever we will send data from the client end, it will get captured in 'req' then we can get the query passed from client using req.query.queryName
    res.send("This is About Page")
})

//Contact
app.get('/contact',(req,res)=>{
    res.send("This is Contact Page")
})

//Don't foget to create server to listen, so lets make it
app.listen(5000)