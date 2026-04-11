// Sorting, limiting, and pagination
const mongoose = require("mongoose");

const Product = require("./P3"); // importimng from P3.js
async function sortPaginationDemo() {
    try{
    await mongoose.connect("mongodb://localhost:27017/merntraining");
    console.log("MongoDB connected successfully");

    const sortedAccending = await Product.find({catagory: "Electronics"}).sort({price:1});
    // console.log("Sorted Accending:",sortedAccending);

    const sortedDccending = await Product.find({catagory: "Electronics"}).sort({price:-1});
    // console.log("Sorted Dccending:",sortedDccending);

    // limit() retricts count 
    const limitedResults = await Product.find({catagory:"Stationary"}).sort({createdOrder:1}).limit(2);
        // console.log("Limited Results:",limitedResults);

        // Pagination
        const page = 2;
        const limitCount = 2;
        const skipCount = (page-1)*limitCount;

        const paginatedResults = await Product.find({catagory:"Stationary"}).sort({createdOrder:1}).skip(skipCount).limit(limitCount);
        console.log("Pagination results:",paginatedResults)

    await mongoose.connection.close();
            console.log(("Connection closed"));
   }
    catch(error){
        console.log("Sort_Pagination demo error",error.message);
    }
};
sortPaginationDemo();