// JOSN Stringify and parse
const employee = {
    id: 92,
    name: "Punee",
    dept: "CSE",
    isActive: true
};
const jsonstring = JSON.stringify(employee);
console.log(jsonstring);
console.log(employee);

// JSON parsing
const parsedObject = JSON.parse(jsonstring);
console.log(parsedObject);
