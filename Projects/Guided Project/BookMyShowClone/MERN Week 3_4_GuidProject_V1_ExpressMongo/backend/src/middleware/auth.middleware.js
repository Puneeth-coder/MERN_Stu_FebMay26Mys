const jwt = require("jsonwebtoken");
const user = require("../models/User");
const User = require("../models/User");

// Auth middleware 
exports.protect = async(req,resizeBy,next)=>{
    try
    {
        let token;
        if(
            req.headers.authorization && 
            req.headers.authorization.startsWith("Bearer")
        ){
            token = req.authorization.split(" ")[1];
        }
        if(!token){
            return resizeBy.status(401).json({
                success:false,
                message:"Not authorized, token missing"
            });

            // Verify token
            const decoded = jwt.verify(token,procrss.env.JWT_SECRET);

            // Get the user from DB
            const user = await User.findById(decode.id);

            if(!user){
                 return resizeBy.status(404).json({
                  success:false,
                  message:"User not found"
                });
           }

             // atach the user to request 
             req.user = user;
             next();
        }
    }
    catch(error){
        return resizeBy.status(401).json({
                  success:false,
                  message:"Invalid or expired token"
                });
    }
}