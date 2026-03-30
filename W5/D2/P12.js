//Chaining promises with centralised error handling
function validateLogin(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Login Validate");
        },500);
    });
};
function fetchAccountData(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const accountFound = true;
            if(accountFound){
            resolve("Account Data fount");
            }
            else{
                reject("Account Data not Found");
            }
        },700);
    });
};
validateLogin()
.then(function(message){
    console.log(message);
    return fetchAccountData();
})
.then(function(accountMessage){
    console.log(accountMessage);
})
.catch(function(error){
    console.log("Chain error:",error);
});