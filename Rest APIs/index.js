const express=require('express')
const fs=require('fs')
const users=require('./MOCK_DATA.json')
const app=express()

app.use(express.urlencoded({extended:false}))
const PORT=8000

app.get('/users',(req,res)=>{
    const html=`
    <ul>
        ${users.map((user)=>(
            `<li>${user.first_name}</li>`
        )).join("")}
    </ul>
    `
    res.send(html)
})


//Now Lets Do the task as specified
app.get('/api/users',(req,res)=>{
    
    return res.json({'users':users})
})

//Route 2 : Dynamic Route
app.get('/api/users/:id',(req,res)=>{
    //firstly get the id via req.params.id
    const id=Number(req.params.id)                               //because id is coming as String,, we need to convert it into number to use it

    //Now finding the desired user via find() method passing necessary args
    const user=users.find((user)=>{
        return user.id===id
    })
    return res.json(user)
})

//Route 3
app.post('/api/users',(req,res)=>{
    const body=req.body
    // console.log(body)
    users.push({...body,id:users.length+1})
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json()
    })
    return res.json({status:"success",id:users.length+1})
})

//Route 4
app.patch('/api/users/:id',(req,res)=>{

    return res.json({status:"pending"})
}) 

//Route 5
app.delete('/api/users/:id',(req,res)=>{
    const id=Number(req.params.id)
    const userWithId=users.findIndex((user)=>{
        return user.id===id
    })
    console.log(id)
    const delUser = users.splice(userWithId, 1)[0]
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json(); 
    });

    return res.json({ status: "success", delUser })
})


//Clearly see Route 2, 4 & 5 have the same routes, just http methods are different!... so in such case when the routes are same, 
//it is good practice to merge them.. lets do it below using route... now to the route what ever http method gets triggered that particular will be executed

/*
app
    .route('/api/users/:id')
    .get((req,res)=>{
        const id=Number(req.params.id)                               //because id is coming as String,, we need to convert it into number to use it

        //Now finding the desired user via find() method passing necessary args
        const user=users.find((user)=>{
            return user.id===id
        })
        return res.json(user)
    })
    .patch('/api/users/:id',(req,res)=>{
        return res.json({status:"pending"})
    })
    .delete('/api/users/:id',(req,res)=>{ 
        return res.json({status:"pending"})
    })
 */

app.listen(PORT,()=>{
    console.log('Server Running On PORT 8000')
})