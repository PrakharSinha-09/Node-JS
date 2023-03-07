//here we will see, how to build a basic server via Node JS.
//For That We have a core module named HTTP, which is responsible for handling request & response in Node JS.

const http=require('http');

http.createServer((req,res)=>{
    res.write("Building The Web  Server With NODE JS")
    res.end()
}).listen(4500)