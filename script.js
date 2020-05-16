let questionList =["How old are you?","How many dogs do you want?", "Do you deserve dogs?"];
let answersList =["Probabily","That answers is not realy what you're thinking.", "You deserve a dog more than you know"];

let isFliped = false;
let card = document.getElementById("card");
function flip() {
    if (!isFliped){
        card.classList.add("flip");
        isFliped = true;
    }else{
        isFliped = false;
        card.classList.remove("flip");
    }
    
}


let index=0;
let question = document.getElementById("question-text");
let answer = document.getElementById("answer");
let number = document.getElementById("question");
setElements();

function setElements(){
    number.innerHTML = index + 1;
    question.innerHTML = questionList[index];
    answer.innerHTML = answersList[index];
}

function next(){
    card.classList.remove("flip");
    if (index >= questionList.length-1){
        reset();
        return;
    }

    index++;
    setElements();
}

function reset(){
    index=0;
    setElements();
}