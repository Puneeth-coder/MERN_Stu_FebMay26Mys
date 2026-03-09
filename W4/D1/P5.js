// Break point 
// inspect the variable values 
// view the call stack 
// step through the code line by line 
// Evaluate expression in the console
// watch how variables change during the execution 
// to find the logical errors  use debugger to check the error 
// see in browser
function calculateTotal(prices){
    let total = 0;
    for(let i=0; i<prices.length; i++) {
        let price = prices[i];
        debugger;
        total+=price;
    }
    return total;
}

let cart = [100,92,200,250,500];
console.log("Total:",calculateTotal(cart));
console.log(document.body);0