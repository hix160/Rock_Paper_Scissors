
function getComputerChoice() {
    const  randNum = Math.random();

    if (randNum < 0.33) {
        console.log("Computer chose ROCK")
        return 0; //rock
    } else if (randNum < 0.66) {
        console.log("Computer chose PAPER")
        return 1; //paper
    } else {
        console.log("Computer chose SCISSORS")
        return 2; //scissors
    }
}

function getHumanChoice() {
    let humanChoice;

    
    while (true) {
        humanChoice = window.prompt("Please choose: Rock, Paper, or Scissors").toLowerCase();

        if (humanChoice === "rock") {
            console.log("Human chose ROCK")
            return 0;
        } else if (humanChoice === "paper") {
            console.log("Human chose PAPER")
            return 1;
        } else if (humanChoice === "scissors") {
            console.log("Human chose SCISSORS")
            return 2;
        } else {
            
            alert("Invalid choice! Please enter Rock, Paper, or Scissors.");
        }
    }
}


function playRound(humanChoice, commputeChoice) {

    const winArr = [[0,-1,1],[1,0,-1],[-1,1,0]];

    var condition = winArr[humanChoice][commputeChoice];
    if (condition === 1) {
        console.log("you won");
        return 1;
    } else if (condition === -1) {
        console.log("you lost");
        return 2;
    } else {
        console.log("its a tie");
        return 3;
    }
}

var computerScore = 0;
var HumanScore = 0;

for (i=0; i <5; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    var conclusion = playRound(humanChoice, computerChoice);
    if (conclusion === 1) {
        HumanScore++;
    }
    else if (conclusion === 2) {
        computerScore++;
    }
    console.log("HumanScore = "+HumanScore);
    console.log("ComputerScore = "+computerScore);
}

console.log("game has ended");

