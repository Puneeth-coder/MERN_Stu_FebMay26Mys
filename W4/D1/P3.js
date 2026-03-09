// // throw custum errors
// // function divide(a,b){
// //     if(b===0){
// //     throw new Error("Cannot divide by zero");
// //     }
// //     return a/b;
// // }
// // try{
// //     console.log(divide(10,2));
// //      console.log(divide(10,0));
// // }
// // catch(err){
// //     console.log("Caught:",err.message);
// // }

// function checkAge(age){
//     if(age<=18){
//     throw new Error("Age must be 18 and above");
//     }
//     return age;
// }
// try{
//     console.log(checkAge(10));
//      console.log(checkAge(20));
// }
// catch(err){
//     console.log("Caught:",err.message);
// }


// create custum error class to handle the error
class validationerror extends Error {
    constructor(message){                          //to intialize the memory 
        super(message);     
        this.name = "validationerror";             // this is used to reffering the class object 
    }
}
function createUser(name){
    if(!name){
        throw new validationerror("Name is required");
    }
    return (name);
}
try{
    console.log(createUser("Puneeth"));
    console.log(createUser());
}
catch(err){
    console.log("Caught:",err.message);
}