const http=require('http')
http.createServer((req,res)=>  {
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write(JSON.stringify({name:'Prakhar Sinha',email:'prakhar.sinha2k2@gmail.com'}))
    res.end()
}).listen(3000)


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