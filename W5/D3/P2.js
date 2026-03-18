// Why we use async/await
function getUser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({id:101, name:"Shivu"});
        },1000);
    });
};
function getOrders(userId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Order-A","Order-B");
        },1200);
    });
};

async function showUserAndOrders(){
    const user = await getUser();
    // console.log("User loaded", user.name);

    const orders = await getOrders(user.id);
    console.log("Orders loaded",orders);
}
showUserAndOrders();