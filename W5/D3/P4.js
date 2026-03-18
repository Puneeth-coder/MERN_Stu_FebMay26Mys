// Combine multiple promise based steps with async/await

function getOrderId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(101);
        },1000)
    })
}
function getOrderDetails(orderId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({
                id:orderId,
                product:"Laptop",
                quantity:4
            });
        },1200);
    })
}

async function showOrderSummery(){
    const orderid = await getOrderId();
    console.log("Order id",orderid);

    const orderDetails = await getOrderDetails(orderid);
    console.log("Product: ", orderDetails.product);
    console.log("Quantity:",orderDetails.quantity);
}
showOrderSummery();