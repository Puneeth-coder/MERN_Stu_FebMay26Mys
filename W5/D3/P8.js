// try, catch, finally with Async/Await
function processPayment(isSucceded){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(isSucceded){
                resolve("Payment processed Successfully");
            }
            else{
                reject("Payment could't processed Successfully")
            }
        });
    });
}
async function runPaymentFlow(isSucceded){
    try{
        const result = await processPayment(isSucceded);
        console.log("Sucess:",result);
    }
    catch(error){
        console.log("Failure:", error);
    }
    finally{
        console.log("Payment flow completed");
    }
};
runPaymentFlow(false).then(function(){
    return runPaymentFlow(true);
});