// Third party Middleware are available in npm registry

const express = require("express");

const morgan = require("morgan");

const cors = require("cors");

const app = express();
// Middleware to log all the requess
app.use(morgan("dev"));  // we can use only in developer server
// Cors is a middleware 
app.use(cors());       // during production server we can use 

app.get("/",function(req,res){
    res.json({
        message: "Third party middleware executed before this response"
    });
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});
