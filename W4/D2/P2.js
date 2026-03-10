// Create element method and append child method 

const list = document.getElementById("list");
let counter = 1;

document.getElementById("addbtn").addEventListener("click",function(){
    const li = document.createElement("li");
    li.textContent = "Item"+ counter++;
    list.appendChild(li);
});

document.getElementById("rmbtn").addEventListener("click",function(){
     errMessage.e = "No items to be deleted";
    if(list.lastElementChild){
    list.removeChild(list.lastElementChild);
    }
    else{
        errMessage.textContent = "No items to be deleted";
    }
});