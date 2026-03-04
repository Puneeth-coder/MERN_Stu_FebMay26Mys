// Default parameters
function product (a=15,b=4) {
    return a*b;
}
console.log("Product of 15 and 4:",product());
console.log("Product of 15 :",product(15));

// Rest Parameters
function sumOfAll(...numbers) {
    console.log(...numbers);
}
sumOfAll(1,2,3);
sumOfAll(11);
