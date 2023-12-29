//Step - 1 isto install the mongoose package.

const mongoose=require('mongoose')

async function connectMongoDb(url) {
    return mongoose.connect(url)
}

module.exports={
    connectMongoDb
}