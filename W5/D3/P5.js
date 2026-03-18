// As Async function always returns a promise
async function getStstusMessage() {
    return "Order is ready";
}

const result = getStstusMessage();

console.log("is this returned value a promise?",result instanceof Promise);
result.then(function(message){
    console.log("Resolved value", message);
});