let playerChoice = ''  //defines the players choice variable and leaves it empty until a choice is made.
let computerChoice = Math.floor(Math.random() * 3) //calculates computers choice represented by a 0, 1, or 2.
console.log(computerChoice); //print the computers choice

function playerRock() { //when the rock button is chosen...
    playerChoice = 0;
    console.log(playerChoice);
    document.getElementById("choice").innerHTML = "Rock";
    if (playerChoice == computerChoice) {
        console.log ("tie")
        document.getElementById("outcome").innerHTML = "tie";
    }
    if (playerChoice == 0 && computerChoice == 1 || playerChoice == 1 && computerChoice == 2 || playerChoice == 2 && computerChoice == 0) {
        console.log ("you Loose")
        document.getElementById("outcome").innerHTML = "computer";
    }
    if (playerChoice == 0 && computerChoice == 2 || playerChoice == 1 && computerChoice == 0 || playerChoice == 2 && computerChoice == 1) {
        console.log ("you Win")
        document.getElementById("outcome").innerHTML = "player";
    }
}

function playerPaper() {
    playerChoice = 1;
    console.log(playerChoice);
    document.getElementById("choice").innerHTML = "Paper";
    if (playerChoice == computerChoice) {
        console.log ("tie")
        document.getElementById("outcome").innerHTML = "tie";
    }
    if (playerChoice == 0 && computerChoice == 1 || playerChoice == 1 && computerChoice == 2 || playerChoice == 2 && computerChoice == 0) {
        console.log ("you Loose")
        document.getElementById("outcome").innerHTML = "computer";
    }
    if (playerChoice == 0 && computerChoice == 2 || playerChoice == 1 && computerChoice == 0 || playerChoice == 2 && computerChoice == 1) {
        console.log ("you Win")
        document.getElementById("outcome").innerHTML = "player";
    }
}

function playerScissors() {
    playerChoice = 2;
    console.log(playerChoice);
    document.getElementById("choice").innerHTML = "Scissors";
    if (playerChoice == computerChoice) {
        console.log ("tie")
        document.getElementById("outcome").innerHTML = "tie";
    }
    if (playerChoice == 0 && computerChoice == 1 || playerChoice == 1 && computerChoice == 2 || playerChoice == 2 && computerChoice == 0) {
        console.log ("you Loose")
        document.getElementById("outcome").innerHTML = "computer";
    }
    if (playerChoice == 0 && computerChoice == 2 || playerChoice == 1 && computerChoice == 0 || playerChoice == 2 && computerChoice == 1) {
        console.log ("you Win")
        document.getElementById("outcome").innerHTML = "player";
    }
}

function enterData () {
    if (computerChoice == 0) {
    document.getElementById("computer").innerHTML = "Rock";
    }
    if (computerChoice == 1) {
    document.getElementById("computer").innerHTML = "Paper";
    }
    if (computerChoice == 2) {
    document.getElementById("computer").innerHTML = "Scissors";
    }
}
window.onload = enterData;