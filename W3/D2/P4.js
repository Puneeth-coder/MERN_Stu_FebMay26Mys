// Conditional Statements

 console.log("Conditional Statements");

  let age = 20;
 if(age<13) {
     console.log("Child");
 }
 else if(age<18) {
     console.log("Teenager");
 }
 else {
     console.log("Adults");
 }

// Switch statement

console.log("Conditional statements");
let day = 'c';
switch(day) {
    case "c":
    console.log("Start of the week");
    break;
    case "wednesday":
        console.log("mid of the week");
        break;
        case "Friday":
            console.log("End of work week");
            break;
            default:
                console.log("Some day in the week");
                break;

}

// Type conversion

let n = Number("ABC");
console.log(" n: " ,n,"Type of n:", typeof n);
console.log("isNaN" ,isNaN(n));