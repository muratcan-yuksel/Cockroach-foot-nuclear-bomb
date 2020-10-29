/** The computer will be choosing a random move **/

function computerPlay () {
    let computerRandom = ["cockroach", "foot", "nuclear-bomb"];
     let computerChoice = computerRandom[Math.floor(Math.random() * computerRandom.length)];
    return computerChoice
    }
    /**Declare two variables to keep score of the game **/    
    let playerScore= 0;
    let computerScore= 0;
    
    
    /** play one round of the game **/
    
    function playRound (playerSelection, computerSelection) {
    if (playerSelection === "cockroach") {
        if (computerSelection === "foot") {
            computerScore++;
            return "Foot squishes cockroach . You lost!" ;
        }
        else if (computerSelection==="nuclear-bomb") {
            playerScore++;
            return "Cockroach survives nuclear-bomb. You win!" ;
        } 
        else {
            return "Tie!"
        }
    }
    else if (playerSelection==="foot") {
        if (computerSelection== "nuclear-bomb") {
            computerScore++;
            return "Nuclear bomb destroys foot. You lost!" ;
        }
        else if (computerSelection==="cockroach") {
            playerScore++;
            return "Foot squishes cockroach. You win!" ;
        }
        else {
            return "Tie!"
        }
    }
    else if (playerSelection==="nuclear-bomb") {
        if (computerSelection==="cockroach") {
            computerScore++;
            return "Cockroach survives nuclear-bomb. You lost!" ;
        }
        else if (computerSelection==="foot") {
            playerScore++;
            return "Nuclear bomb destroys foot. You win!" ;
        }
        else {
            return "Tie!"
        }
    }
    else {
        return "This is not possible."
    }
    }
     /** loop the game for 5 times**/
     //Removing the 5 round game thingy for the UI assigment
    /*function game() {
        for (let i = 0; i < 5; i++) {
            let userChoice= prompt ("cockroach,foot, or nuclear-bomb?"); //asks the user a choice
            userChoiceResults = userChoice;
            playerSelection= userChoiceResults.toLowerCase(); //turns user choice into lowercase
            let computerSelection= computerPlay();
            console.log( playRound(playerSelection, computerSelection )); 
        
    } */
    //decides the score
    if (playerScore > computerScore) {
        alert (`In this dire struggle against the rise of the machines, you won ${playerScore} times and the machine won ${computerScore} times. You won, my friend, you won.`)
    } else if ( playerScore < computerScore){
        alert (`Against the computer, you won ${playerScore} times and it won ${computerScore} times. You lost. Pathetic.`)
    }
    else {
        alert("In the end, no one won.")
    }
//removing the following curly bracket and the game function
    //}
    //calls the function
  //  game ();

const buttonCockroach= document.getElementById("cockroach");
 buttonCockroach.addEventListener("click", functionCockroach => {
    playerSelection = "cockroach";
    let computerSelection = computerPlay();
    alert (playRound(playerSelection,computerSelection));

 });