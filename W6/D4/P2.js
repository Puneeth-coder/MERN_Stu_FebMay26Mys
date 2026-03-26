// Creating a simple HTTP Server

const http = require("http");

// createServe(): creates a HTTP server instance // it accepts a callback with two important objects: 
// 1. req: incoming request details 
// 2. res: outgoing response controle 
const server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/plain"});
    // end() sends the response body and closes the response 
    res.end("Hello from NodeJS HTTP server");
});
// 3000 - it is port number  0 - 65000
server.listen(3000,function(){
    console.log("Server is running at http://localhost:3000");
})