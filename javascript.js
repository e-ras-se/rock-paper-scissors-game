function getComputerChoice(){
    choice = Math.floor(Math.random() * 3);


    if (choice == 0)
    {
        return "rock"
    }
    else if (choice == 1)
    {
        return "paper"
    }
    else
    {
        return "scissors"
    }
}

function getHumanChoice(){

    return userChoice = prompt("What is your choice: Rock, Paper, or Scissors!");
}

var humanScore;
var computerScore;

humanScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice){

    humanChoice = humanChoice.toLowerCase();

    console.log(humanChoice);

    if( humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors" )
    {
        if(humanChoice == computerChoice){
            console.log("Draw! No points awarded.");
        }
        else
        {
            if( (humanChoice == "rock") && (computerChoice == "scissors") || (humanChoice == "scissors") && (computerChoice == "paper") || (humanChoice == "paper") && (computerChoice == "rock") )
            {
                console.log("You win! " + userChoice + " beats " + computerChoice);
                humanScore++;
            }
            else
            {
                console.log("You lose! " + computerChoice + " beats " + userChoice);
                computerScore++;
            }
        }
    }
    else
    {
        return alert("Not a valid choice. Must be some varation\nof rock, paper, scissors.");
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection);
console.log(computerSelection);


playRound(humanSelection, computerSelection);

console.log(humanScore);
console.log(computerScore);












