// Role middelware: RBAC (Role Based Access Controle)
exports.authorize = (...roles)=>{
    return(req,res,next)=>{
        if(!req.user || !roles.includes(req.user.role)){
             return resizeBy.status(403).json({
                success:false,
                message:"Access denied: insufficient permision",
            });
        }  
        next(); 
    };
};