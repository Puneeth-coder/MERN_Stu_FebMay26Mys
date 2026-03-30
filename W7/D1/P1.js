// Basics of ExpressJS - setup 
// npm init -y
// npm install express

// Import module of express 
const express = require("express");
// Calling express function which creates the main application object, This object is used to register routes and middleware
const app = express();
// app.get() function is used to handles GET requests for a specific path
app.get("/",function(req,res){
    // res.send is a function that sends a response body and ends the request automatically
    res.send("Hello from Express Server");
});
// listen  is a function that starts the server on a chosen port number
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});