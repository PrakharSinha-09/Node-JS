//First Step is to install npm mongodb package...use command npm i mongodb to install
const {MongoClient}=require('mongodb')
const url='mongodb://localhost:27017'                           //This Url will always be same as long as local connection is made because port no. 27017 is registered for mongodb

const client=new MongoClient(url)                               //pass the mongodb url inside which will be same everytime

//Now Lets see how to get data from database
async function getData()
{  
    let result=await client.connect()                           //this returns a promise, so preceded with await
    let db=result.db('e-comm')                                  //to which database, we want to connect


    //We can have many collections right, now select which collection to access

    let collection=db.collection('products')                    //we are connecting with products collection
    let response=await collection.find({}).toArray()            //find method will get all the data, toArray is used so that data could be seen in redable structure
    console.log(response)
}

getData()