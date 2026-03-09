const onceBtn = document.getElementById("onceBtn");

// Listener to once only for a event 
onceBtn.addEventListener("click",function(){
    console.log("This click listener works only once.");
},{once:true});
// Global keyboard short creation
document.addEventListener("keydown",function(event){
    if(event.ctrlKey && event.key.toLowerCase()==="s"){
        event.preventDefault();
        console.log("Custom ctrles shortcut triggered");
    }
});