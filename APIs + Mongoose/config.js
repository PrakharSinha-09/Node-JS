//Step - 1 isto install the mongoose package.
const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/e-comm")
.then(()=>console.log("Mongo Db Connected"))
.catch((err)=>console.log("Connection Failed"))

//as mongoose.connect returns a promise