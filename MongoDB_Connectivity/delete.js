const dbConnect=require('./mongodb')

const deleteData=async ()=>{
    let data=await dbConnect()
    let result=await data.deleteMany({name:'Realme 10'})

    console.log(result)
}

deleteData()

//If The Data passed to be deleted is not present in the database, then its acknowledged will be true but deletedCount will be zero
//and this is the way we can check if the data is present in the database or not...if deletedCount is zero implies that data is not present in the db