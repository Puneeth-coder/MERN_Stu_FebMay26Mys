const signupForm = document.getElementById("signupForm");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const message = document.getElementById("message");

signupForm.addEventListener("submit",function(event){
    event.preventDefault();
    const email = signupEmail.value; 
    if(!email){ 
        message.textContent = "Email is required";
        message.style.color = "red";
        signupEmail.focus();
        return;
    }
    if(!email.includes('@') || !email.includes('.')){
        message.textContent = "Please enter a valid email id";
        message.style.color = "red";
        signupEmail.focus();
        return;
    }

    // Password validation
     const password = signupPassword.value;
     console.log(signupForm.elements.signupPassword.value);
    if(!password){
     message.textContent = "Password is required";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    // check length of password
    if(password.length<8){
        message.textContent = "Password must be atleast 8 characters";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    // check UPPERCASE characters        
    if(!/[A-Z]/.test(password)){
        message.textContent = "Password must be have atleast 1 UPPERCASE character.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    if(!/[a-z]/.test(password)){
        message.textContent = "Password must be have atleast 1 lowercase character.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    // check for number
    if(!/\d/.test(password)){
        message.textContent = "Password must be have atleast 1 digit in it.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    // check for special characters
    if(!/[@#$%^&*!]/.test(password)){
        message.textContent = "Password must be have atleast 1 special character !@#$%^&*.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    message.textContent = "Valid Email and Password Entered";
    message.style.color = "green";
    console.log("Success!",(email,password));

});
// clear message on input
signupEmail.addEventListener("input",() => message.textContent = "");
signupEmail.addEventListener("input",() => message.textContent = "");