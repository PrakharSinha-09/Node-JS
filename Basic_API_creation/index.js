const http=require('http')

const myServer=http.createServer((req,res)=>  {                                    //whenever request will be made, this callback function will be called 
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write(JSON.stringify({name:'Prakhar Sinha',email:'prakhar.sinha2k2@gmail.com'}))
    console.log(req);
    switch (req.url){
        case "/":
            res.end("Home Page");
            break;
        case "/about":
            res.end("About Page");
            break;
    }
    // res.end('Hello Bolte!')                             //end/terminate the server with the the message, we can send anything img, html which is known as Server Side Rendering
})

myServer.listen(3000,()=>{ 
    console.log('Server Started at PORT 3000'); 
})


/*
Now, Suppose we have data of so many users, in that case it is best practice to store them in other files and then import it here.
for example:

const data=[
    {name:'Prakhar Sinha',email:'prakhar.sinha2k2@gmail.com'},
    {name:'Prbal Sinha',email:'prabal@gmail.com'},
    {name:'Ankit Sinha',email:'Ankit@gmail.com'},
    {name:'Aman Sinha',email:'amn@gmail.com'},
    {name:'Amit Sinha',email:'amit@gmail.com'},
    {name:'Alok Sinha',email:'alok@gmail.com'}
]

and then export this
Module.exports=data

and in this file import it via:
const data=require('./data')
and then we can pass this data directly in res.write(JSON.stringify(data));
and so on!
*/