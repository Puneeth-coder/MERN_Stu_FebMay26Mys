// Nested Objects and Methods 
const student = {
    firstName: "Shiva",
    lastName:"M",
    Scores:{
        science: 86,
        Maths: 80
    },
    hobbies:["Reading","Cooking"],
    fullname: function(){
        return this.firstName + " " + this.lastName
    },
    greet(){
        console.log("Hi",this.fullname());
    },
};
student.greet();