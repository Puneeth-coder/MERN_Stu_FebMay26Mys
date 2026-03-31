// sending JSON

const express = require("express");

const app = express();

app.get("/api/status",function(res,req){
    // res.json() automatically serialized the object and set the JSON content type
    res.json({
        success:true,
        message:"Express API is working"
    });
});

app.get("/api/error",function(res,req){
    // res.json() automatically serialized the object and set the JSON content type
    res.status(404).json({
        success:false,
        message:"Requested resource is not found"
    });
});

app.listen(4003,function(){
    console.log("Express server running at http://localhost:4003");
});