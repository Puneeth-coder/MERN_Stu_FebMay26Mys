// Basics of Embedding and referencing
const mongoose = require("mongoose");

async function main(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/embrel');
        console.log("Connected to mongoDB");

        const orderSchema = new mongoose.Schema({
            product:String,
            prices:Number
        });
        const userSchema = new mongoose.Schema({
            name:String,
            orders:[orderSchema]   // Embedded documents. 
        });
        const User = mongoose.model("User",userSchema);

        const embeddedUser = await User.create({
            name:"Puneeth",
            orders:[
                {product:"Laptop", prices:50000},
                {product:"TV", prices:25000},
                {product:"Projector", prices:70000}
            ]
        });
        //  await embeddedUser.save();
        // console.log("Created embedded  with create()",embeddedUser); // It featches one set of data.
        //  console.log("Users:\n");
        // console.log(await User.find());    // this one fetches the all data.
         const users = await User.find().lean();
        console.log(JSON.stringify(users,null,2));   
         
        // Referencing 
        const userReferenceSchema = new mongoose.Schema({
            name:String
        });
        const orderReferenceSchema = new mongoose.Schema({
            product:String,
            price:Number,
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref:'UserRef'
            }
        });
        const UserRef = mongoose.model('UserRef',userReferenceSchema);
        const OrderRef = mongoose.model('OrderRef',orderReferenceSchema);

        const refUser = await User.create({name:"Puneeth"});
      await OrderRef.create([
            {product:"Laptop",price:40000,user:refUser._id},
            {product:"Charger",price:4000,user:refUser._id}
        ]);
        console.log("Referenced orders");
        console.log(await OrderRef.find().populate('user'));

    }
    catch(error){
        console.error("Error",error.message);
    }
    finally{
        await mongoose.disconnect();
        console.log("Disconnected from DB");
    }
};
main();