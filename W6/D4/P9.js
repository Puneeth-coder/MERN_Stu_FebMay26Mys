// Route parameters using manual path parsing
// Here we learn to extract dynamic values from  a URL path

const http = require("http");

const server = http.createServer(function(req,res){
    if(req.method === "GET" && req.url.startsWith("/users/")){
        // split the path and pick the last section as route parameter
        const parts = req.url.split("/");
        const userId = parts[2];

        res.writeHead(200,{"Content-type":"application/json"});
        res.end(JSON.stringify({
            route: "/users/:id",
            userId:userId
        }));
        return;
    }
    // 405: indicates URL route is valid when the method is not supported
    res.writeHead(405,{"Content-type":"application/json"});
    res.end(JSON.stringify({message:"method not allowed"}));


    res.writeHead(404,{"Content-type":"application/json"});
    res.end(JSON.stringify({message:"Route not found"}));
});

server.listen(3001,function(){
    console.log("Server is running at http://localhost:3001");
});