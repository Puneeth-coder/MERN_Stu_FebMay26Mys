const form = document.getElementById("loginForm");
const usearname = document.getElementById("usearname");
const message = document.getElementById("message");

form.addEventListener("submit",function(event){
    // stoping the page reload 
    event.preventDefault();

    if(usearname.value.trim()==="") {
        message.textContent = "Username is required";
        console.log("Form blocked: no input for usearname");
        return;
    }
    message.textContent = "Form handled by js for user",usearname.value;
    console.log("form submitted with username",usearname.value);
});