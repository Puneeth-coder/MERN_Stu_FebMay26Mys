// Virtual fields in mongoose
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
        firstName: String,
        lastName: String,
        email: String
       },
       {
        // This allows virtual to apper when converting documents to JSON or objects
        toJSON:{virtuals:true},
        toObject:{virtuals:true}
       }
    );

    // A virtual field is not stored on MongoDB
    // It is computed dinamically from existing stored fields
    userSchema.virtual("fullname").get(function(){
        return this.firstName +" "+ this.lastName;
    });

    const User = mongoose.model("VirtualUser",userSchema);

    const user = new User({
        firstName: "Puneeth",
        lastName: "Shetty",
        email: "smpli@92.com"
    });

    console.log("Hello, ",user.fullname);
    console.log("Object output includes virtual ",user.toObject());