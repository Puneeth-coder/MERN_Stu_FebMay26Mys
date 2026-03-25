// Dirctory[folder] operations: mkdir, readdir and rmdir/rm
const fs = require("fs");
const path = require("path");

const demoDir = path.join(__dirname,"demo-folder");
// to create folder
fs.mkdirSync(demoDir,{recursive:true});

fs.writeFileSync(path.join(demoDir,"file1.txt"),"file1 content");
fs.writeFileSync(path.join(demoDir,"file2.txt"),"file2 content");
// to check folder contents
const entries = fs.readdirSync(demoDir);
console.log("Directory contents:",entries);

// delete the folder
fs.rmSync(demoDir,{recursive:true, force:true});                        // 
console.log("Directory exists?",fs.existsSync(demoDir));