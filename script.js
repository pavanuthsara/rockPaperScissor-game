const yourChoice = document.getElementById("yourChoice");
const computerChoice = document.getElementById("computerChoice");

const possibleChoices = document.querySelectorAll('button'); //select all the choices from button tag

let userChoice;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener(('click'), (e) => {
    userChoice = e.target.id;
    yourChoice.innerHTML = userChoice;
}))

