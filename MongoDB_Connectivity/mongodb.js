//First Step is to install npm mongodb package...use command npm i mongodb to install
const {MongoClient}=require('mongodb')
const url='mongodb://localhost:27017'                           //This Url will always be same as long as local connection is made because port no. 27017 is registered for mongodb
const databaseName='e-comm'
const client=new MongoClient(url)                               //pass the mongodb url inside which will be same everytime

async function dbConnect()
{
    let result=await client.connect();                          //this returns a promise, so preceded with await
    db=result.db(databaseName)                                  //to which database, we want to connect
    return db.collection('products')                            //we are connecting with products collection
}

module.exports=dbConnect;                                      //remember don't call the function, simply pass it like!
