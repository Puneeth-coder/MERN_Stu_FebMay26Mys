// Basics of objects
const person = {
    name:"Puneeth",
    age:22, 
    isStudent: true
};
console.log("Person",person);

// Add a new property 

person.city = "Mysuru";
person.state = "Karnataka"
console.log("Person",person);

// Modify
person.age = 23;
// delete 
delete person.isStudent;
console.log("Person",person);

// Object Constructor
 const car = new Object();
 car.make = "Audi";
 car.model = "A4";
 car.year = 2026;
 console.log("My car",car);


 