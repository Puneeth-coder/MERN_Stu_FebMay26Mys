// try catch basics
// const error = document.getElementById("error");
//  error.textContent = "Trying to access undefined variables";
//   try{
//      console.log("Trying to access undefined variables");
//      console.log(notDefined);
//  }
//  catch(err){
//      console.log("error caught",err.name,"-",err.message);
//      error.textContent = "Trying to access undefined variables";
//  }
//  console.log("Program execution continue");

// JSON Parsing error
let jsonText  = "(json)";
try {
    let data = JSON.parse(jsonText);
    console.log(data);
} 
catch(err){
    console.log("JSON Parse error",err.message);
}

try {
    let num = 10;
    num();
} 
catch(err){
    console.log("Caught error",err.name);
}