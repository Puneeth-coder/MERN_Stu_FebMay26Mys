// Array map
let numArray = [1,2,3,4];
let squared = numArray.map(numArray => numArray*numArray);
console.log(squared);


let prices = [100,200,300,400];
let priceswithGST = prices.map(prices => prices*0.18);
console.log("Prices w/o tax",prices);
console.log("Prices with tax",priceswithGST);

// using the map to extract files / indivisual values in the array
let users = [
    {name: "Harsha", age: 24},
    {name: "krishna", age: 28}
];
let names = users.map(user => user.name);
console.log(" ",names);
