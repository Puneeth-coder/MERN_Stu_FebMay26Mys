// Sorting, limiting, and pagination
const mongoose = require("mongoose");

const Product = require("./P3"); // importimng from P3.js
async function sortPaginationDemo() {
    try{
    await mongoose.connect("mongodb://localhost:27017/merntraining");
    console.log("MongoDB connected successfully");

    const sortedAccending = await Product.find({catagory: "Electronics"}).sort({price:1});
    console.log("Sorted Accending:",sortedAccending);

    await mongoose.connection.close();
            console.log(("Connection closed"));
   }
    catch(error){
        console.log("Sort_Pagination demo error",error.message);
    }
};
sortPaginationDemo();