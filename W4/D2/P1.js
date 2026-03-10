// innerText and textContent
// innerText: visible rendered text only
// textContent: all text nodes regardless of css
// innerHTML: allows reading or writing HTML markup inside an element

const message = document.getElementById("message");
// const textContent = document.getElementById("textContentbtn");
document.getElementById("innerTextbtn").addEventListener("click",function(){
    message.innerText = "updated using innerText";
});

document.getElementById("textContentbtn").addEventListener("click",function(){
    message.textContent = "<strong>updated</strong> using textContentbtn";
});
document.getElementById("resetbtn").addEventListener("click",function(){
    message.textContent = "Original Message";
});
const box = document.getElementById("box");
document.getElementById("innerHTMLbtn").addEventListener("click",function(){
    box.innerHTML = "<strong>Original</strong> Content";
});