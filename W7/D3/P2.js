// Handling Asychronous errors with callbacks
const expree = require("express");
const fs = require("fs");
const path = require("path");
const app = expree();

app.get("/file",function(req,res,next){
    const filePath = path.join(__dirname,"newFile.txt");
    fs.readFile(filePath,"utf-8",function(error,data){
        if(error){
            // Forwarding the Asynchronous error
            return next(error);
        }
        res.send(data);
    });
});
// Centralised error handling middleware
app.use(function(error,req,res,next){
    res.status(404).json({
        success:false,
        message:"File or Folder does not exist",
    });
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});