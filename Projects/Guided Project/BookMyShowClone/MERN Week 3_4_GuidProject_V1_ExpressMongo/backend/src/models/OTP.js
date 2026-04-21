const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        lowercase:true,
        index:true
    },
    otp:{
        type:String,
        required:true,
        select:false                        // Select is for hide the otp or password
    },
    expiresAt:{
        type:Date,
        required:true
    },
    attempts:{
        type:Number,
        default:0,
    },
},{
    timestamps:true,
});

// TTL index
otpSchema.index({expiresAt:1},{expiresAfterSeconds:0});

// Exports
module.exports = mongoose.model("OTP",otpSchema);