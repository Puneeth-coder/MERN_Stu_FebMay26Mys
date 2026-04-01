// Generating token using login function and verifying the token
const jwt = require("jsonwebtoken");

const secretKey = "smpl123";
const ersecretKey = "mpl123";
function loginUser(email,password){
    if(email === "p@email.com" && password === "mp123") {
        const token = jwt.sign({
            userId:101,
            email:email,
            role:"student"
        },secretKey,{expiresIn:"1h"});
        return{
            success:true,
            token:token
        };
    }
    return{
            success:false,
            message:"Invalid credentials"
        };
};
const loginResult = loginUser("p@email.com","mp123");
console.log("Login Result:",loginResult);

if(loginResult.success){
    try{
        const verifiedPayload = jwt.verify(loginResult.token,ersecretKey);
            console.log("Verified Payload:",verifiedPayload);
    }
    catch(error){
    console.log("Verification failed",error.message);
}
}