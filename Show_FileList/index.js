const fs=require('fs')
const path=require('path')
const dirPath=path.join(__dirname,'files')     //this enables to get the path upto we are in the directly + the folder passed in the argument like D:/.../file so that we can create folder inside it
console.log(dirPath)        

//Creating Files
for(let i=0;i<5;i++)
{
    fs.writeFileSync(`${dirPath}/hello${i}.txt`,"File Created")
}

//Showing Files
fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log(item)
    })
})

//Reading A File
fs.readFile(`${dirPath}/hello0.txt`,'utf8',(err,item)=>{
    console.log(item)
})

fs.writeFileSync('js.txt','sds')
fs.unlinkSync('js.txt')