

let quizForm = document.querySelector("form");
let finishedScreen = document.querySelector(".finished");
let pointsLabel = document.querySelector(".points-label");
let sendButton = document.querySelector(".send-button");

let textAreaboss = document.querySelector(".text-inputboss");
let textAreanorthern = document.querySelector(".text-inputnorthern");
let textAreaovergeared = document.querySelector(".text-inputovergeared");
let textAreaSSS = document.querySelector(".text-inputsss");
sendButton.addEventListener("click", handleForm);




textAreaovergeared.addEventListener("focus", () => {
    textAreaovergeared.setAttribute("placeholder", "")
});

textAreaovergeared.addEventListener("blur", () => {
    textAreaovergeared.setAttribute("placeholder", "Skriv ditt svar")
});

textAreanorthern.addEventListener("focus", () => {
    textAreanorthern.setAttribute("placeholder", "")
});

textAreanorthern.addEventListener("blur", () => {
    textAreanorthern.setAttribute("placeholder", "Skriv ditt svar")
});

textAreaboss.addEventListener("focus", () => {
    textAreaboss.setAttribute("placeholder", "")
});

textAreaboss.addEventListener("blur", () => {
    textAreaboss.setAttribute("placeholder", "Skriv ditt svar")
});


textAreaSSS.addEventListener("focus", () => {
    textAreaSSS.setAttribute("placeholder", "")
});

textAreaSSS.addEventListener("blur", () => {
    textAreaSSS.setAttribute("placeholder", "Skriv ditt svar")
});


function handleForm(){
    let points = 0;
    let answers = document.querySelectorAll("input:checked");

    for (let answer = 0; answer < answers.length; answer++) {
        points += parseInt (answers[answer].value, 10);
    }

if (textAreaboss) {
    let textAnswer7 = textAreaboss.value.toLowerCase().trim();
    if (textAnswer7 == "boss in school") {
        points++;
    }
}

if (textAreanorthern) {
    let textAnswer8 = textAreanorthern.value.toLowerCase().trim();
    if (textAnswer8 == "legend of the northern blade") {
        points++;
    }
}

if (textAreaovergeared) {
    let textAnswer9 = textAreaovergeared.value.toLowerCase().trim();
    if (textAnswer9 == "overgeared") {
        points++;
    }
}

if (textAreaSSS) {
    let textAnswer10 = textAreaSSS.value.toLowerCase().trim();
    if (textAnswer10 == "sss class suicide hunter" ) {
        points++;
    }
}


quizForm.classList.toggle("hidden");    
pointsLabel.innerHTML = points;
finishedScreen.classList.toggle("hidden");


}