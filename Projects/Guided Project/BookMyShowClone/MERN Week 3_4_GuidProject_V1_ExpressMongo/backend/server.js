// Load the details from the environment valiables
require("dotenv").config();

const app = require("./app");
const connectDB = require("./src/config/db");
// Connect DB
connectDB();
// Port configuration 
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});