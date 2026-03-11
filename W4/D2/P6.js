const livePassword = document.getElementById("livePassword");
const message = document.getElementById("message");

livePassword.addEventListener("input",function(){
    const password = livePassword.value;

    if(!password){
    const password = livePassword.value;
     message.textContent = "Password is required";
        message.style.color = "red";
        livePassword.focus();
        return;
    }

    // check length of password
    if(password.length<8){
        message.textContent = "Password must be atleast 8 characters";
        message.style.color = "red";
        livePassword.focus();
        return;
    }

    // check UPPERCASE characters        
    if(!/[A-Z]/.test(password)){
        message.textContent = "Password must be have atleast 1 UPPERCASE character.";
        message.style.color = "red";
        livePassword.focus();
        return;
    }

    if(!/[a-z]/.test(password)){
        message.textContent = "Password must be have atleast 1 lowercase character.";
        message.style.color = "red";
        livePassword.focus();
        return;
    }

    // check for number
    if(!/\d/.test(password)){
        message.textContent = "Password must be have atleast 1 digit in it.";
        message.style.color = "red";
        livePassword.focus();
        return;
    }

    // check for special characters
    if(!/[@#$%^&*!]/.test(password)){
        message.textContent = "Password must be have atleast 1 special character !@#$%^&*.";
        message.style.color = "red";
        livePassword.focus();
        return;
    }
    message.textContent = "Valid Email and Password Entered";
    message.style.color = "green";
    console.log("Success!",(password));

});