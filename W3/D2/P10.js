// callback function
// is a function which is pass an argument to another function //Used in EventListiner

function greetUser(name,callback){
    console.log("Hello,",name);
    callback();
}
greetUser("Puneeth",function(){
    console.log("Callback function executed");
});