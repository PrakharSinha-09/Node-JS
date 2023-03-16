const dbConnect=require('./mongodb')

const updateData=async ()=>{
    let data=await dbConnect()
    let result=data.updateOne(
        {name:'Realme 10'},{
            $set: {name:'iPhone 15',price:'150000',brand:'Apple'}  
        }
    )
}

updateData()