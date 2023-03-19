//Lets see how to insert data in mongodb via Node js

//First Step is same that we need to connect the db, directly import that file as discussed in the previous tutorial when we  we were reading the data from momngodb

const dbConnect=require('./mongodb')

const insertData=async ()=>{
    let db=await dbConnect();
    const result=await db.insertMany(                                        //insert is deprecated so used--> insertOne, insertMany (to insert multiple data @ once)..remember it returns promise, so preceding it with await
        [
            {name:"Realme 6",brand:"RealME",price:"15000"},
            {name:"Realme 10",brand:"RealME",price:"25000"},
            {name:"Realme 10",brand:"RealME",price:"25000"}

        ]
    )

    if(result.acknowledged)
    {
        console.log("Data Inserted")
    }
}

insertData()