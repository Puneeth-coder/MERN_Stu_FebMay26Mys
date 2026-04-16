// Timestamp and Advance queries
const mongoose = require("mongoose");

async function main() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/datedb');
        console.log("MongoDB connected");

        const demoSchema = new mongoose.Schema(
        {
            name:String
        },
        {
           timestamps:true
        }
    );
      const Model = mongoose.model('LogTime',demoSchema);
        // await Model.deleteMany();

    //    const doc =  await Model.create([
    //         {name:"Janhavi"},
    //         {name:"Yashaswini"},
    //         {name:"Thanu"}
    // ]);
    //  console.log("Document:",doc);

    const recent = await Model.find({
        createdAt:{
            $gte: new Date(Date.now()-1500000)
        }
    }).sort({createdAt:-1});
        console.log("Recent",recent);
    }
    catch(error){
      console.log("Error:",error.message);
    }
    finally{
        await mongoose.disconnect();
        console.log("DB Disconnected");
    }
};
main();