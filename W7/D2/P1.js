// Routing: Nested Routes
// "/" base url


const express = require("express");
const app = express();
// Router objects helps organize route Groups
const apiRouter = express.Router();

apiRouter.get("/users",function(req,res){
    res.json({
        route:"/api/users",
        message:"Users route inside api router"
    });
});

apiRouter.get("/orders",function(req,res){
    res.json({
        route:"/api/orders",
        message:"Orders route inside api router"
    });
});
// Mounting the router under the /api base path
app.use("/api",apiRouter);

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});

// NEW Routeer
// products router (handles /api/products/...)

const productsRouter = express.Router();

// /api/products  -> create products
productsRouter.post("/",(req,res) => {
    res.json({
        route: "/api/products",
        message: "Create products"
    });
});

// /api/products/:id  -> delete products
productsRouter.delete("/:id",(req,res) => {
    res.json({
        route: `/api/products/${req.params.id}`,
        message: "Delete products"
    });
});

// mount products router under /api/products
apiRouter.use("/products",productsRouter);

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});
