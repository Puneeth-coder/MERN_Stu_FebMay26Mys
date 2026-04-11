// Applied filters to the Query using comparision operators
const mongoose=require("mongoose");

const productSchema = new mongoose.Schema({
            name: String,
            price: Number,
            catagory: String,
            status: String
        });

        const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

async function runFilterDemo(){
    try{
        await mongoose.connect("mongodb://localhost:27017/merntraining");
        console.log("MongoDB connected successfully");

        // const productSchema = new mongoose.Schema({
        //     name: String,
        //     price: Number,
        //     catagory: String,
        //     status: String
        // });

        // const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
        
        const firstProduct = await Product.create({
            name: "laptop",
            price: 220000,
            catagory: "Electronics",
            status: "Available"
        });
        const secondProduct = await Product.create({
            name: "Mobile",
            price: 22000,
            catagory: "Electronics",
            status: "Unavailable"
        });
        const thirdProduct = await Product.create({
            name: "Book",
            price: 22,
            catagory: "Stationary",
            status: "Available"
        });
        const fourthProduct = await Product.create({
            name: "Biryani",
            price: 220,
            catagory: "Food",
            status: "Unavailable"
        });

        const equalQuery=await Product.find({status:{$eq:"Available"}});
        // console.log("Products which are active:",equalQuery);

        const greaterQuery=await Product.find({price:{$gt:20000}});
        // console.log("Products which are greater than 20000 are:",greaterQuery);
        
        const notEqualQuery = await Product.find({name:{$ne:"laptop"}});
        console.log("Name is not equal to laptop:",notEqualQuery);

        await mongoose.connection.close();
        console.log(("Connection closed"));
    } 
    catch(error){
        console.log("Filter demo error",error.message);
    }
};
// runFilterDemo();

module.exports = Product;