//Lets see how to access static html files via express, for now we can't load 

const express=require('express')
const path=require('path')                        //path is very important module
  
const app=express()
const publicPath=path.join(__dirname,'Public')

// console.log(publicPath)

app.use(express.static(publicPath))               //this 'use' is a middleware, will see in details later.....static helps to load static pages/content

app.listen(3000)