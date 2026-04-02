// Query selectors and query selectorsAll
console.log("document object", document);
console.log("page title",document.title);

//const heading = document.getElementById("mainHeading");
console.log("Headig text",heading.textContent);

// getelement by class name
const info = document.getElementsByClassName("info");
const run = document.getElementById("run");

// run.addEventListener("click",function(){
//     for(let i=0; i<info.length; i++){
//         console.log(info[i].textContent);
//         info[i].style.color = "blue";
//     }
// });

// getElementByTagName
const spanTag = document.getElementsByTagName("span");
run.addEventListener("click",function(){
    for(let i=0; i<info.length; i++){
        console.log(info[i].textContent);
        info[i].style.color = "blue";
    }
    for(let i=0; i<spanTag.length; i++){
         console.log(spanTag[i].textContent);
        spanTag[i].style.backgroundColor = "lightgreen";
    }
    const mainFirstHeading = document.querySelector(".mainHeading");     // . for class and # for id
          mainFirstHeading.style.color = "red";
});

// Query selector: returns teh first element matching a css selector

// Query selectorAll: returns all elements matching the selector
const tasks = document.querySelectorAll(".task");
tasks.forEach(function(task){
    task.style.color = "purple";
})