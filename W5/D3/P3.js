// Handling errors with try/catch

function  loadCustomerProile(){
    return new  Promise(function(resolve,reject){
        const isServiceAvailable = false;

        if(isServiceAvailable){
            resolve("Success! customer profile loaded.");
        }
        else {
            reject("Unsuccessful!! customer profile Unavailable");
        }
    })
}

async function showCustomerProfile(){
    try{
        const message = await loadCustomerProile();
    console.log(message);
    }
    catch(error){
        console.error("Error: ",error);
    }
}
showCustomerProfile();
