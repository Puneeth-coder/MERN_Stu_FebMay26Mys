// Reduced functions or methods
let nums = [5,10,15];

let Average = nums.reduce((intermediateSum,current) => intermediateSum + current,0)/nums.length;
console.log(Average);


// Reduce to object count by category
let items = ["pen","pencile","book","pen"];
let count = items.reduce((a,b) =>{ a[b] = (a[b] || 0) + 1;
return a;
},{});
console.log("item count:",count);