const themeInput = document.getElementById("themeInput");
const output = document.getElementById("output");

document.getElementById("saveBtn").addEventListener("click",function(){
    localStorage.setItem("theme",themeInput.value);
    localStorage.setItem("userName","Puneeth");
    localStorage.setItem("loggedIN","true");
    console.log("Saved theme: ",themeInput.value);
    output.textContent = "Data Stored successfull into the localStorage";
    output.style.color = "green";
});

document.getElementById("readBtn").addEventListener("click",function(){
    const theme = localStorage.getItem("theme");
    output.textContent = "theme is: " + theme;
    output.style.color = "green";
});

document.getElementById("removeBtn").addEventListener("click",function(){
    const theme = localStorage.removeItem("userName");
    output.textContent = "removed 'userName'";
    output.style.color = "green";
});

document.getElementById("clearBtn").addEventListener("click",function(){
    const theme = localStorage.clear();
    output.textContent = "Clear All Storage";
    output.style.color = "red";
});