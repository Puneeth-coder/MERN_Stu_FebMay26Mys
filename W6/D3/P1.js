// Introduction to the Node.js file system (fs) Built-in module

const fs = require("fs");
const fsPromises = require("fs/promises");

// callback
console.log("Type of fs.readFile:",typeof fs.readFile);
console.log("Type of fs.readFile:",typeof fs.writeFile);
// fs/Promises
console.log("Type of fs.readFile:",typeof fsPromises.readFile);
console.log("Type of fs.readFile:",typeof fsPromises.writeFile);