const jsonOutput = document.getElementById("jsonOutput");

document.getElementById("saveBtn").addEventListener("click",function(){
    const user = {
        id : 101,
        name : "Puneeth",
        role : "Full Stack Developer",
        skills : ["MERN stack","html","css"]
    };
    localStorage.setItem("userProfile",JSON.stringify(user));
    jsonOutput.textContent = "user object saved as string to localStorage";
});

document.getElementById("redBtn").addEventListener("click",function(){
    try{
      const up = localStorage.getItem("userProfile");
      console.log(JSON.parse(up));
      console.log(up);
      jsonOutput.textContent = "userProfile: " + up;
    }
    catch(error){
        jsonOutput.textContent = "JSON Parsing failed";
    }
});