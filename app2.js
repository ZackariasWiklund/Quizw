
let quizForm = document.querySelector("form");
let finishedScreen = document.querySelector(".finished");
let pointsLabel = document.querySelector(".points-label");
let sendButton = document.querySelector(".send-button");


let textAreagiorno = document.querySelector(".text-inputgiorno");
let textAreablackbeard = document.querySelector(".text-inputblackbeard");

sendButton.addEventListener("click", handleForm);


textAreagiorno.addEventListener("focus", () => {
    textAreagiorno.setAttribute("placeholder", "")

});

textAreagiorno.addEventListener("blur", () => {
    textAreagiorno.setAttribute("placeholder", "Skriv ditt svar")
});


textAreablackbeard.addEventListener("focus", () => {
    textAreablackbeard.setAttribute("placeholder", "")
});

textAreablackbeard.addEventListener("blur", () => {
    textAreablackbeard.setAttribute("placeholder", "Skriv ditt svar")

});







function handleForm(){
    let points = 0;
    let answers = document.querySelectorAll("input:checked");

    for (let answer = 0; answer < answers.length; answer++) {
        points += parseInt (answers[answer].value, 10);
    }




    if (textAreagiorno) {
        let textAnswer5 = textAreagiorno.value.toLowerCase().trim();
        if(textAnswer5 == "giorno") {
            points++;
        }
    }
    
    if (textAreablackbeard) {
        let textAnswer6 = textAreablackbeard.value.toLowerCase().trim();
        if(textAnswer6 == "blackbeard") {
            points++;
        }
    }

   

        
    quizForm.classList.toggle("hidden");    
    pointsLabel.innerHTML = points;
    finishedScreen.classList.toggle("hidden");
    
}