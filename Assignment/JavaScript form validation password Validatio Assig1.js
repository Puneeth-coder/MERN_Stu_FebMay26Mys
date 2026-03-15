const Password = document.getElementById("signupPassword");
const Password1 = document.getElementById("confirmPassword");
const message = document.getElementById("message");
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit",function(event){
    event.preventDefault();
    const Password = signupPassword.value;
    const confirmPassword = Password1.value;
    if(Password==confirmPassword) {
        message.textContent = "Password Matches";
        message.style.color = "green"
        
    }
    if(Password!=confirmPassword){
        message.textContent = "Password Not Matches";
        message.style.color = "red"
    }
})