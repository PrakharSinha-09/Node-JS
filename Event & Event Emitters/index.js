const express=require('express')
const EventEmitter=require('events')                                //Event Emitter is a class, so writing first letter capital

const app=express()
const event=new EventEmitter()

let count=0;

//event handling goes like this in node js
event.on("countAPI",()=>{                                     //event.on means whenever the countAPI event gets fired, do this task...first arg is the name of event and other the function that needs to be performed
    count++;                                                  //event.once will the event just once.
    console.log("Event Called "+ count)
})

app.get('/',(req,res)=>{
    res.send("api called")
    event.emit("countAPI")                                    //the argument passed within will be treated as the name of the event as we have nothing like onClick() types things that existed in Javascript
                                                              //So, we are making an event as an API, remember this line because in nodejs we can make events via an API only
                                                              //So, this is how we can create our custom events
})          

app.get('/search',(req,res)=>{
    res.send("api called 2")
})

app.get('/update',(req,res)=>{
    res.send("api called 3")
})

app.listen(5000)