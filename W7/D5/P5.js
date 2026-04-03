// Assigning roles to users and restricting access
// role based access controle 
const express = require("express");
const app = express();

app.use(function(req,res,next){
    req.user = {
        id:101,
        username:"Puneeth",
        role:"admin"        // we can change user or admin 
    };
    next();
});

function requriredRole(role){
    return function(req,res,next){
        if(!req.user){
             return res.status(401).json({
            success:false,
            message:"No User Found Authentication required"
        });
        }
        if(req.user.role!==role){
            return res.status(403).json({
                success:false,
                message:"Insufficient permission"
            });
        }
        next();
    }
}

app.get("/profile",function(req,res){
  res.json({
    success:true,
    message:"Profile page",
    user:req.user
  });
});

app.get("/admin",requriredRole("admin"),function(req,res){
  res.json({
    success:true,
    message:"Admin page",
    user:req.user
  });
});

app.listen(4000,function(){
    console.log("Express session demo server running at http://localhost:4000");
});