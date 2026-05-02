const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Auth middleware 
exports.protect = async(req,res,next)=>{
    try
    {
// console.log("running 0");

        let token;
        if(
            req.headers.authorization && 
            req.headers.authorization.startsWith("Bearer")
        ){
            token = req.headers.authorization.split(" ")[1];
// console.log("running 0 .1");
        }
        console.log("token : ",token);
        
        if(!token){
// console.log("running 0 .2");

            return res.status(401).json({
                success:false,
                message:"Not authorized, token missing"
            });
        }
// console.log("running 1");

            // Verify token
            const decoded = jwt.verify(token,process.env.JWT_SECRET);

            // Get the user from DB
            const user = await User.findById(decoded.id);

            if(!user){
                 return res.status(404).json({
                  success:false,
                  message:"User not found"
                });
           }
// console.log("running 2");

             // atach the user to request 
             req.user = user;
             next();
    }
    catch(error){
        return res.status(401).json({
                  success:false,
                  message:"Invalid or expired token"
                });
    }
}
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Auth middleware
exports.protect = async(req,res,next)=>{
    try{
        let token;
        if(
            req.headers.authorization && 
            req.headers.authorization.startsWith("Bearer")
        ){
            token = req.headers.authorization.split(" ")[1];
        }
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Not authorized, token missing",
            });
        }

        // Verify token
        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        // Get user from DB
        const user = await User.findById(decoded.id);

        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found",
            });
        }
        // Attach user to request
        req.user = user;
        next();
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:"Invalid or expired token"
        });
    }
};