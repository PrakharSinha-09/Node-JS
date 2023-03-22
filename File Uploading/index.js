const express = require('express');
const multer = require('multer');
const path=require('path')
const dirPath=path.join(__dirname,'uploads')
// console.log(dirPath)
const app = express();


    const storage=multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `${dirPath}`)
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })

    const upload = multer({ storage: storage }).single("user_file");

app.post("/upload", upload, (req, resp) => {
    resp.send("file upload")
});

app.listen(5000)