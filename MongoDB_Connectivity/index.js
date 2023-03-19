const dbConnect=require('./mongodb')

//Now, We can get data via 2 methods, (internally they work in the same fashion!)

/*
Method - 1 
dbConnect().then((res)=>{
    res.find().toArray().then((data)=>{
        console.log(data)
    })
})
*/

//Method - 2 ...This is mostly used method, so use this method.
const getData=async ()=>{
    let data=await dbConnect();
    data=await data.find().toArray()             //find() is an asynchronous function, so obviously, await is used!
    console.log(data)
}

getData()


//This is the recommended practice when you want to connect db with node, always make a seperate file which connects node with mongodb
//and simply here we can make different functions that we want to execute
//Cleared The Clutter....Right!