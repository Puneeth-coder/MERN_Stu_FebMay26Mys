console.log("Node js Architecture demo");
console.log("1. Script started");

// setTimeOut
setTimeout(() => {
    console.log("3. Timer callback finished after waiting");
},10000);               // represinting the time in milisec

console.log("2. Script continued without waiting for timer callback");
