// Route parameters and query parameters 
// Route parameters:
// query parameters:

const express = require("express");
const app = express();

app.get("/products/:id",function(res,req){
    res.json({
        rat: req.params.id,
        queryParameters: req.query
    });
});

app.listen(4003,function(){
    console.log("Express server running at http://localhost:4003");
});