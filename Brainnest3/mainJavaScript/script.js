function computerPlay() {
    var choose = ["Rock", "Paper", "Scissors"];
    var random = (Math.floor(Math.random() * 3));
    if (random === 0) {
        return choose[0];
    } else if (random === 1) {
        return choose[1];
    } else if (random === 2) {
        return choose[2];
    }
};

var me = 0;
var computer = 0;

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "Paper") {
        console.log("You lose! Paper beats Rock");
        computer = computer + 1;
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        console.log("You win! Rock beats Scissors");
        me = me + 1;
    } else if (playerSelection === "rock" && computerSelection === "Rock") {
        console.log("It's a tie");
        me = me + 1;
        computer = computer + 1;

    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        console.log("It's a tie");
        me = me + 1;
        computer = computer + 1;
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        console.log("You lose! Scissors beats Paper");
        computer = computer + 1;
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        console.log("You win! Paper beats Rock");
        me = me + 1;

    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        console.log("You win! Scissors beats Paper");
        me = me + 1;
    } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        console.log("It's a tie");
        me = me + 1;
        computer = computer + 1;
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        console.log("You lose! Rock beats Scissors");
        computer = computer + 1;
    }
};

function game() {
    for (let i = 0; i < 3; i++) {
        let playerSelection = prompt("What's your choice?");
        const computerSelection = computerPlay();
        console.log("Your choice: " + playerSelection + ".....Computer choice: " + computerSelection);
        console.log(playRound(playerSelection.toLowerCase(), computerSelection));
        console.log("My score: " + me + " Computer score: " + computer);
    }

    if (me > computer) {
        console.log("You win");
    } else if (me < computer) {
        console.log("You lose")
    } else if (me == computer) {
        console.log("It's a tie");
    }
}

game();