function playGame(){
    var humanScore;
    var computerScore;

    humanScore = 0;
    computerScore = 0;

    function playRound(humanChoice, computerChoice){

        humanChoice = humanChoice.toLowerCase();

        if( humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors" )
        {
            if(humanChoice == computerChoice){
                console.log("Draw! No points awarded. | You both chose " + computerChoice);
            }
            else
            {
                if( (humanChoice == "rock") && (computerChoice == "scissors") || (humanChoice == "scissors") && (computerChoice == "paper") || (humanChoice == "paper") && (computerChoice == "rock") )
                {
                    console.log("Computer chose: " + computerChoice + ". " + "You win! " + userChoice + " beats " + computerChoice);
                    humanScore++;
                }
                else
                {
                    console.log("Computer chose: " + computerChoice + ". " + "You lose! " + computerChoice + " beats " + userChoice);
                    computerScore++;
                }
            }
        }
        else
        {
            return alert("Not a valid choice. Must be some varation\nof rock, paper, scissors.");
        }

    }

    var i;

    for(i = 0; i < 5; i++){

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();  

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
        playRound(humanSelection, computerSelection);
    }

    console.log("The Final score\n" + "-----------\n" + "Computer: " + computerScore + "\n" + "User: " + humanScore);
}

playGame();













