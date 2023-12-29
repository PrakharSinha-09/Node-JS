const express = require('express');
const multer = require('multer');
const path=require('path')

const app=express()
const PORT=8000

const storage=multer.diskStorage({
    //destination will tell where to store the uploaded file, req is the original request object, file is the file that user will upload and finally the callback, error in the first arg, and location to upload in second arg
    destination: function(req,file,cb) {         
        return cb(null,'./uploads')
    },           
    
    //filename is used to determine what the file should be named inside the folder. If no filename is given, each file will be given a random name that doesn't include any file extension.
    filename: function(req,file,cb) {
        return cb(null,`${Date.now()}-${file.originalname}`)              //Date.now will help us to resolve the conflict that there could be the file of same now, which aftr=er uploading wont be the same as they are preced by today's date
    }
})

//this means that from frontend whatever the file the user uploads, that should go in the uploads folder.
//this upload is sort of middleware, so we have to pass this when user hits the upload request lets say!
const upload=multer({storage})

app.set('view engine','ejs')
app.set('views',path.resolve('./views'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/',(req,res)=>{
    return res.render("homepage")
})

//name inside upload.Single is the same that we passed from the frontend under name attribute!
app.post('/upload',upload.single('profilePicture'),async(req,res)=>{           
    console.log(req.body);
    console.log(req.file);

    res.redirect('/')


})

app.listen(PORT,()=>{
    console.log('Server Started On PORT 8000');
})