// Event delegation
// deligation means assin a work to someone

const taskList = document.getElementById("taskList");
const addtask = document.getElementById("addTaks");
let taskCount = 3;
taskList.addEventListener("click",function(event){
    if(event.target.classList.contains("deleteBtn")) {
        console.log("Delete Button clicked for:",event.target.parentElement.textcontent.trim());
        event.target.parentElement.remove();
    };
});

addtask.addEventListener("click",function(){
    taskCount++;
    const li = document.createElement("li");
    li.innerHTML = "Task" + taskCount + '<button class="deleteBtn">Delete</button>';
    taskList.appendChild(li);
    console.log("New Task Created");
});