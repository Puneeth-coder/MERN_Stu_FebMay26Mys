// logging 
// console.log("Console logging");

// console.warn("Warning message");

// console.error("Error message");

let users = [
    {id:1,name:"Punii"},
    {id:2,name:"in"},
];

console.log(users);
console.table(users);

// Group the related logs
console.group("Grouped logs");
console.log("log 1");
console.log("log 2");
console.log("log 3");
console.group();

// measure execution 
console.time("LoopTimer");
for(let i=0; i<1000; i++);
console.timeEnd("LoopTimer");