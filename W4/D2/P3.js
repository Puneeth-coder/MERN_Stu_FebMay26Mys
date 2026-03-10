// 
const container = document.getElementById("container");
// types of position 
// before begin
// after begin
// beforend
// afterend
document.getElementById("btn").addEventListener("click",function(){
    container.insertAdjacentHTML("beforeend","<p>Dynamically Inserted</p>");
});