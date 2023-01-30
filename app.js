let quizForm = document.querySelector("form");
let finishedScreen = document.querySelector(".finished");
let pointsLabel = document.querySelector(".points-label");
let sendButton = document.querySelector(".send-button");
let textInput = document.querySelector(".text-input");
let textArea = document.querySelector(".text-input2");
let textArea2 = document.querySelector(".text-input3");
let textArea3 = document.querySelector(".text-input4");
let questions = document.querySelectorAll(".question");
let currentQuestion = 0;

sendButton.addEventListener("click", handleForm);


textInput.addEventListener("focus", () => {
    textInput.setAttribute("placeholder", "")
} );

textInput.addEventListener("blur", () => {
    textInput.setAttribute("placeholder", "Skriv ditt svar")
} );


textArea.addEventListener("focus", () => {
    textArea.setAttribute("placeholder", "")
} );


textArea.addEventListener("blur", () => {
    textArea.setAttribute("placeholder", "Skriv ditt svar")
} );

textArea2.addEventListener("focus", () => {
    textArea2.setAttribute("placeholder", "")
});


textArea2.addEventListener("blur", () => {
    textArea2.setAttribute("placeholder", "Skriv ditt svar")
});

textArea3.addEventListener("focus", () => {
    textArea3.setAttribute("placeholder", "")
});

textArea3.addEventListener("blur", () => {
    textArea3.setAttribute("placeholder", "Skriv ditt svar")
});




function handleForm(){
    let points = 0;
    let answers = document.querySelectorAll("input:checked");

    for (let answer = 0; answer < answers.length; answer++) {
        points += parseInt (answers[answer].value, 10);
    }
    if (textInput) {
        let textAnswer = textInput.value.toLowerCase().trim();
        if (textAnswer == "katanagatari") {
            points++;
        }
    }
    if (textArea) {
        let textAnswer2 = textArea.value.toLowerCase().trim();
        if (textAnswer2 == "akudama drive") {
            points++;
        }
    }

    if (textArea2) {
        let textAnswer3 = textArea2.value.toLowerCase().trim();
        if(textAnswer3 == "medaka box") {
            points++;
        }
    }

    if (textArea3) {
        let textAnswer4 = textArea3.value.toLowerCase().trim();
        if(textAnswer4 == "link click") {
            points++;
        }
    }



    
    
    quizForm.classList.toggle("hidden");    
    pointsLabel.innerHTML = points;
    finishedScreen.classList.toggle("hidden");

    }
    


// function nextQuestion() {
//     for(let question = 0; question < questions.length; question++) {
//         questions[question].classList.add("hidden");
//     }
//     currentQuestion++;
//     questions[question].classList.remove("hidden")
// }

