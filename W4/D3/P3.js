const themeInput = document.getElementById("themeInput");
const output = document.getElementById("output");

document.getElementById("saveBtn").addEventListener("click",function(){
    sessionStorage.setItem("theme",themeInput.value);
    sessionStorage.setItem("userName","Puneeth");
    sessionStorage.setItem("loggedIN","true");
    console.log("Saved theme: ",themeInput.value);
    output.textContent = "Data Stored successfull into the sessionStorage";
    output.style.color = "green";
});

document.getElementById("readBtn").addEventListener("click",function(){
    const theme = sessionStorage.getItem("theme");
    output.textContent = "theme is: " + theme;
    output.style.color = "green";
});

document.getElementById("removeBtn").addEventListener("click",function(){
    const theme = sessionStorage.removeItem("userName");
    output.textContent = "removed 'userName'";
    output.style.color = "green";
});

document.getElementById("clearBtn").addEventListener("click",function(){
    const theme = sessionStorage.clear();
    output.textContent = "Clear All Storage";
    output.style.color = "red";
});