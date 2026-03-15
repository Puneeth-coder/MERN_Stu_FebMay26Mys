const Question = document.getElementById("Question");
const Answer = document.getElementById("Answer");
const inpquestion = document.getElementById("inpquestion");
const inpanswer = document.getElementById("inpanswer");
const button1 = document.getElementById("Btn1");
const button2 = document.getElementById("Btn2");

button1.addEventListener("click",function(event){
    event.preventDefault();
    const que = inpquestion.value.trim();
    const ans = inpanswer.value.trim();

    if(que.length<5){
        message.textContent = "Question length must be greater than 5";
        return;
    }

    if(ans.length<15){
        message.textContent = "Answer length must be greater than 15";
        return;
    }

    if(que.length>5){
        const h3 = document.createElement("h3");
        h3.textContent = inpquestion.value;
        Question.appendChild(h3);
    }

    if(ans.length>15){
        const p = document.createElement("p");
        p.textContent = inpanswer.value;
        Answer.appendChild(p);
    }

});


button2.addEventListener("click",function(){
    Question.removeChild(Question.lastElementChild);
    Answer.removeChild(Answer.lastElementChild);
})