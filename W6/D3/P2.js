// Reading and writing files synchronously

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname,"sync-note.txt");

// fs.writeFileSync(filePath,"This file was using writeFileSync().\nSynchronous operation block execution");
// Append to a file
fs.appendFile(filePath, "New text added using fs.appendFile",
    function(error){
        if(error){
            console.log("Append error:",error.message);
            return;
        }
        console.log("File content Appended");
    }
);

console.log("File written synchronously");
// for read operation
const content = fs.readFileSync(filePath,"utf-8");

console.log("File read Synchronously");
console.log("File content\n",content);