//Chaining Promises with returned values
function getBaseAmoumt(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(1000);
        },500);
    });
};
getBaseAmoumt()
.then(function(amount){
    console.log("Base amount:", amount);
    return amount+200;
})
.then(function(updatedAmount){
    console.log("Amount after service charge:" , updatedAmount);
    return updatedAmount - 100;
})
.then(function(finalAmount){
    console.log("Final Amount after discount:", finalAmount);
});