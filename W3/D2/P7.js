// Arrow functions
// Add two function
const sum = (a,b) => {
    return a+b;
}
console.log("2+5:",sum(2,5));

// another approch of arrow function-single line return / implicit return
const square = (x) =>  x*x;
console.log("Square of 5:",square(5));



const sayHello = () => console.log("Hellow from arrow function");
sayHello()