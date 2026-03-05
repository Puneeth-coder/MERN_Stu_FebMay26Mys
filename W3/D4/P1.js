// Basics array concepts
console.log("Array Basics");
// Creating an array
let emptyArray = [];
let numArray = [1,2,3,4];
let mixedArray = [42,typeof"Hello",true,null,{name:"Gola"},[5,6]];
console.log(mixedArray);
console.log(numArray);
console.log(emptyArray);

// using constructor
let fruits = new Array("Apple","Mango","Bannana");
console.log(fruits);
console.log("fruits is a array or not?",Array.isArray(fruits));

// puas function for add
fruits.push("cherry");
console.log(fruits);

// pop function for remove 
fruits.pop();

// Unshift: add elements to the beginning
fruits.unshift("Orange");
console.log(fruits);

// shift is to remove from the beginning
fruits.shift();
console.log(fruits);