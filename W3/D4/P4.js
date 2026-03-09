// Array filter Method 
// let marks = [60,92,75,65,80,50];
// let passed = marks.filter(mark => mark>=70);
// console.log(marks);
// console.log(passed);

let students = [
    {name:"sujay", score: 60},
    {name:"shiva", score: 92},
    {name:"sunil", score: 75},
    {name:"arun",  score:65},
    {name:"pavan", score:80},
    {name:"uday", score:50}
];
let passed = students.filter(student => student.score >=70);
let passed0 = passed.map(student => student.name );
console.log("Passed Students name",passed);
console.log(passed0);

// OR
let passed1 = students.filter(student => student.score >=70).map(students => students.name);
console.log(passed1);