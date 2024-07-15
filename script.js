const yourChoice = document.getElementById("yourChoice");
const computerChoice = document.getElementById("computerChoice");

const possibleChoices = document.querySelectorAll('button'); //select all the choices from button tag

let userChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener(('click'), (e) => {
    userChoice = e.target.id;
    yourChoice.innerHTML = userChoice;
    generateComputerChoice();
}))

let randomComputerChoice;

function generateComputerChoice(){
    const randomNumber = Math.ceil(Math.random() * possibleChoices.length); //select random integer between 1-3
    if(randomNumber == 1)
        computerChoice.innerHTML = "rock👊";
    else if(randomNumber == 2)
        computerChoice.innerHTML = "paper✋";
    else
        computerChoice.innerHTML = "scissor✌️";
}

// function generateResult(){
//     if(userChoice == )
// }

