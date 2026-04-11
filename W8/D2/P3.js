// Combined example of virtual, index, filoter, select, sort, lean
const mongoose = require("mongoose");

async function demo() {
    try{
        await mongoose.connect("mongodb://localhost:27017/abcmern");
            console.log("MongoDB connected successfully");

            // const productSchema = new mongoose.Schema({
            //     name:String,
            //     price:Number,
            //     category:String,
            //     description:String,
            //     stock:Number,
            //     tag:String
            // });

            const userSchema = new mongoose.Schema({
                firstName:String,
                lastName:String,
                email:{type:String, index:true},
                username:{type:String, unique:true},
                role:String,
                createdAt:Date,
                tag:String
            },
            {
                toJSON:{virtuals:true},
                toObject:{virtuals:true}
            });

            // Compound index
            // Query filter by role and sort by createdAt
            userSchema.index({role:1,createdAt:-1});

            // A virtual field is not stored on MongoDB
    // It is computed dinamically from existing stored fields
    userSchema.virtual("fullname").get(function(){
        return this.firstName +" "+ this.lastName;
    });
        const User = mongoose.models.PerformanceUser || mongoose.model("PerformenceUser",userSchema);

        await User.deleteMany({tag:"demo-example"});
        await User.deleteMany({tag:"demo-example1"});

        await User.create([{
                firstName:"Sujay",
                lastName:"Kumar",
                email:"s@k.com",
                username:"sk123",
                role:"user",
                createdAt:new Date("2026-04-11"),
                tag:"demo-example"
        },
        {
                firstName:"Monisha",
                lastName:"Kumar",
                email:"m@k.com",
                username:"mk123",
                role:"admin",
                createdAt:new Date("2026-04-01"),
                tag:"demo-example"
        },
        {
                firstName:"Sanjana",
                lastName:"Shetty",
                email:"s@s.com",
                username:"ssh123",
                role:"user",
                createdAt:new Date("2026-04-02"),
                tag:"demo-example1"
        }
    ]);

    // filter,select,sort,lean
    const users = await User.find({tag:"demo-example"}).select("firstName lastName email role createdAt").sort({createdAt:-1}).limit(2).lean();
    console.log("Optimized user query resukt:",users);

    const oneUser = await User.findOne({email:"s@k.com", tag:"demo-example"});
    console.log("Virtual fullname: ",oneUser.fullname);

    await mongoose.connection.close();
      console.log(("Connection closed"));

    }
    catch(error){
        console.log("Demo error",error.message);
    }
};
demo();