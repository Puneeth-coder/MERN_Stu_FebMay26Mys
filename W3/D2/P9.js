// IIFE Functioin
//without parameter
(function(){
    console.log("Basic example of IIFE executed immediately");
})();

// with parameter
(function(appName,version){
    console.log("App:",appName,"Version:",version);
})("Nodejs","V22.22.0");

// with return value
const result = (function(){
    const a = 10, b = 20;
    return a+b;
})();
console.log("Sum is",result);