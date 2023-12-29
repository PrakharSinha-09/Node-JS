const http=require('http')
const fs=require('fs')
const url=require('url')

//url package will give all the things to use url efficiently
//basically via this we can extract all infos from the url

/*
const myServer=http.createServer((req,res)=>{
    if(req.url==='/favicon.ico') return res.end()
    
    //to use url package, first step is to parse
    const myurl=url.parse(req.url,true)           //passing true means you want to get the info about query parameters as well!
    console.log(myurl);
    
    const log=`${Date.now()} : Hey! New Request Received By ${myurl.query.name}  \n`
    fs.appendFile('log.txt',log,(err,data)=>{
        
        switch(myurl.pathname){
            case "/":
                if(req.method==='GET'){
                    res.end('<h1>Home Page</h1>')
                }
                break;

            case "/about":
                res.end('About Page')
                break;
                
            case "/about/add":
                res.end('About add Page')
                break;

            case "/contact":
                res.end('Contact Page')
                break;

            case "/signup":
                if(req.method==='GET'){
                    res.end('Signup Page')
                }
                else if(req.method==='POST'){
                    res.end('Success!')
                }
                break;

            default: 
            res.end('Error 404')
        }
    })
})

myServer.listen(5000,()=>{
    console.log("Server Running on Port 5000");
})
*/

//Now Wrapping The Server in the function, which was previously the anonymous function, now we have a named function will work exactly same obviously!
function myHandler(req,res){
    if(req.url==='/favicon.ico') return res.end()
    
    //to use url package, first step is to parse
    const myurl=url.parse(req.url,true)           //passing true means you want to get the info about query parameters as well!
    console.log(myurl);

    const log=`${Date.now()} : Hey! New Request Received By ${myurl.query.name}  \n`
    fs.appendFile('log.txt',log,(err,data)=>{
        
        switch(myurl.pathname){
            case "/":
                if(req.method==='GET'){
                    res.end('<h1>Home Page</h1>')
                }
                break;

            case "/about":
                res.end('About Page')
                break;
                
            case "/about/add":
                res.end('About add Page')
                break;

            case "/contact":
                res.end('Contact Page')
                break;

            case "/signup":
                if(req.method==='GET'){
                    res.end('Signup Page')
                }
                else if(req.method==='POST'){
                    res.end('Success!')
                }
                break;

            default: 
                res.end('Error 404')
            }
        }
    )
}

/*
const myServer=http.createServer(myHandler)
myServer.listen(5000,()=>{
    console.log("Server Running on Port 5000");
})
*/

//Now you can see how messy is our server side code is looking right and to counter this problem, Express Js came into the picture

//revolutonised the way of writing server side code.... it is basically the framework of Nodejs, whicb simpllies the way of creation of endpoimts

//you saw above that for a particular path, we are handling the request methods in messy way using if-else statements!

//express has simplified all these!
//in this method suppose user hit the endpoint which doesn't exist, here you have to hanbdle that request mannualy

//but express will automate that thing...... How Cool!

//also in traditional way, we use to import many modules and write the logic, in express many things are built in, that means you don't have to install different package

//for ex. for using query params in the previous technique, we needed to import url package, but here in express, request object has that method i.e., req.query.name

//Lets wrap the above server code in a function and then continue

//Now i want some library which can write me nyhandler function in an efficient manner so that i don't have to do much work....  that is express

//people argue that we should not use http module for creating servers, rather go for express... but remember express under the hood uses http only

const express=require('express')
const app=express()                                 //this is my handler function! which is handling requset and response

app.get('/',(req,res)=>{
    return res.send('Hello Fron Home Page')
})
app.get('/about',(req,res)=>{
    return res.send(`Hello Fron About Page ${req.query.name} `)
})

//You don't have to do this thing also in express, just listen and express will handle this http.createServer thing
/*
const myServer=http.createServer(app)
myServer.listen(5000,()=>{
    console.log("Server Running on Port 5000");
})
*/

app.listen(5000,()=>{console.log("Server Running On PORT 5000");})


//See how beautifuly express handles the thing na.... thus it is recommended to use this framework to write server code thoug you can write all 
//in the nodejs environment too using http module but also remember express uses http only uynder the hood, it is just the thing it minimizes the effort of
//writing the intense code and automates various things... discussed above!