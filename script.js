const yourChoice = document.getElementById("yourChoice");
const computerChoice = document.getElementById("computerChoice");
const result = document.getElementById("result");

const possibleChoices = document.querySelectorAll('button'); //select all the choices from button tag

let userChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener(('click'), (e) => {
    userChoice = e.target.id;
    yourChoice.innerHTML = userChoice;
    generateComputerChoice();
    generateResult();
}))

let randomComputerChoice;

function generateComputerChoice(){
    const randomNumber = Math.ceil(Math.random() * possibleChoices.length); //select random integer between 1-3
    if(randomNumber == 1)
        randomComputerChoice = "rock👊";
    else if(randomNumber == 2)
        randomComputerChoice = "paper✋";
    else
        randomComputerChoice = "scissor✌️";

    computerChoice.innerHTML = randomComputerChoice;
}

let resultDisplay;

function generateResult(){
    if(userChoice === randomComputerChoice )
        resultDisplay = "Draw";
    else if(userChoice==="rock👊" && randomComputerChoice==="paper✋") 
        resultDisplay = "You Lost!";
    else if(userChoice==="rock👊" && randomComputerChoice==="scissor✌️") 
        resultDisplay = "You Win!";
    else if(userChoice==="paper✋" && randomComputerChoice==="scissor✌️") 
        resultDisplay = "You Lost!";
    else if(userChoice==="paper✋" && randomComputerChoice==="rock👊") 
        resultDisplay = "You Win!";
    else if(userChoice==="scissor✌️" && randomComputerChoice==="rock👊") 
        resultDisplay = "You Lost!";
    else if(userChoice==="scissor✌️" && randomComputerChoice==="paper✋") 
        resultDisplay = "You Win!";

    result.innerHTML = resultDisplay;
}

