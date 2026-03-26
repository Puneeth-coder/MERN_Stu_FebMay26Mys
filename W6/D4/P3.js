// Inspecting request details in an HTTP server 

const http = require("http");

const server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/plain"});
    // end() sends the response body and closes the response 
    // req.method tells the HTTP method, such as GET & POST commonly used methods 
    res.end("Method:"+req.method+"\nURL:"+req.url);
});

server.listen(3001,function(){
    console.log("Server is running at http://localhost:3001");
});