// Parsing JSON request bodies
const http = require("http");

const server = http.createServer(function(req,res){
    if(req.method === "POST" && req.url === "/api/users"){
        let body = "";

        req.on("data",function(chunk){
            body+=chunk.toString();
        });

        req.on("end",function(){
            try{
                const parsed = JSON.parse(body);

                res.writeHead(201,{"Content-type":"application/json"});
                res.end(JSON.stringify({
                    success:true,
                    received:parsed
                }));
            }
            catch(error){
                res.writeHead(400,{"Content-type":"application/json"});
                res.end(JSON.stringify({
                    success:false,
                    message:"Invalid JSON body"
                }));
            }
            return;
        });
    }
    res.writeHead(404,{"Content-type":"application/json"});
    res.end(JSON.stringify({success:false,message:"Route not found"}));
});
server.listen(3002,function(){
    console.log("Server is running at http://localhost:3002");
});

// curl -x POST http://localhost:3001/api/users -H "Content-type:application/json" -d "{\"name\":\"Puneeth\",\"role\":\"admin\"}
