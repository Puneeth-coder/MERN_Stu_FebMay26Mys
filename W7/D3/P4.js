// Creating a custom error class
const express = require("express");
const app = express();

// custom error class
class AppError extends Error{                  // Error is parent class AppError is child class
    constructor(message,statusCode){
        super(message);                       // super is a keyword it calls the parentclass
        this.statusCode = statusCode;         // to call a perticular object we use this keyword
    }
}

app.get("/product",function(req,res,next){
    next(new AppError("Product not found"),404);
});

app.get("/search",function(req,res,next){
    if(!req.query.q){
       return next(new AppError("Search query is required"),404);
    }
    res.json({
        success:true,
        query:req.query.q
    });
});
// Centralised error handling middleware
app.use(function(error,req,res,next){
    res.status(error.statusCode || 500).json({
        success:false,
        message: error.message,
        statusCode: error.statusCode || 500
    });
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});