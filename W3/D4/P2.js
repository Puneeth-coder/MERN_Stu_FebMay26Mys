// Array iterations 
let numArray = [1,2,3,4];
for(let i=0; i<numArray.length; i++) {
    console.log(" ",numArray[i]);
}

// for of loop
for(let num of numArray){
    console.log(" ",num);
}

// foreach loop
numArray.forEach((value,index) => {
        console.log(" ",value,index);
});
