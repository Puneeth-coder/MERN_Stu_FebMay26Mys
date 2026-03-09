// Moves events 

const hoverbox = document.getElementById("hoverbox");
hoverbox.addEventListener("mouseover",function(){
    hoverbox.textContent = "Mouse is over me";
    hoverbox.style.backgroundColor = "lightyellow";
});

hoverbox.addEventListener("mouseout",function(){
    hoverbox.textContent = "Mouse is over me";
    hoverbox.style.backgroundColor = "";
});