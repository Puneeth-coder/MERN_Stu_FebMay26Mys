// Reading and writing of files Asynchronously with fs/Promises

const fs = require("fs/promises");
const path = require("path");

async function runPromiseBasedFileFlow(){
    const filePath = path.join(__dirname,"promises-note.txt");

    try{
        await fs.writeFile( filePath,"written using fs/Promises. This works with async/await");
        console.log("File writteen using fs/Promises");

    const content = await fs.readFile(filePath,"utf-8");
    console.log(content)
    }
    catch(error){
        console.log("Promiose-Based fs error:",error.message);
    };

};
runPromiseBasedFileFlow();