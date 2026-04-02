// Setting and reading cookies
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
// cookie-parser reades the cookie request header and places the parsed values into req.cookie().
app.use(cookieParser());
app.get("/set-language",function(req,res){
    res.cookie("language","english",{
        maxAge:60*60*1000                  // 1000-ms, 60-sec, 60-mins
    });
    res.send("Language Cookie set to 'english'");
});
app.get("/read-language",function(req,res){
    const language = req.cookies.language;

    res.json({
        message:"Cookie read from request",
        language: language || "No langushe cookie found"
    });
});
app.listen(4000,function(){
    console.log("JWT protected route server running at http://localhost:4000");
});