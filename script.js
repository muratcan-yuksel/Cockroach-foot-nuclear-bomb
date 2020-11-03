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
        let element = document.querySelector("p");
        let computerLiveScore= document.getElementById("computerLive");
        let playerLiveScore= document.getElementById("playerLive");
    if (playerSelection === "cockroach") {
        if (computerSelection === "foot") {
            computerScore++;
            element.textContent="Foot squishes cockroach . You lost!" ;
            computerLiveScore.textContent=computerScore;
        }
        else if (computerSelection==="nuclear-bomb") {
            playerScore++;
            element.textContent= "Cockroach survives nuclear-bomb. You win!" ;
            playerLiveScore.textContent=playerScore;
        } 
        else {
            element.textContent= "Tie!"
        }
    }
    else if (playerSelection==="foot") {
        if (computerSelection== "nuclear-bomb") {
            computerScore++;
            element.textContent= "Nuclear bomb destroys foot. You lost!" ;
            computerLiveScore.textContent=computerScore;
        }
        else if (computerSelection==="cockroach") {
            playerScore++;
            element.textContent="Foot squishes cockroach. You win!" ;
            playerLiveScore.textContent=playerScore;
        }
        else {
            element.textContent= "Tie!"
        }
    }
    else if (playerSelection==="nuclear-bomb") {
        if (computerSelection==="cockroach") {
            computerScore++;
            element.textContent= "Cockroach survives nuclear-bomb. You lost!" ;
            computerLiveScore.textContent=computerScore;
        }
        else if (computerSelection==="foot") {
            playerScore++;
            element.textContent= "Nuclear bomb destroys foot. You win!" ;
            playerLiveScore.textContent=playerScore;
        }
        else {
            element.textContent= "Tie!"
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
   /* if (playerScore > computerScore) {
        alert (`In this dire struggle against the rise of the machines, you won ${playerScore} times and the machine won ${computerScore} times. You won, my friend, you won.`)
    } else if ( playerScore < computerScore){
        alert (`Against the computer, you won ${playerScore} times and it won ${computerScore} times. You lost. Pathetic.`)
    }
    else {
        console.log("In the end, no one won.")
    }*/
//removing the following curly bracket and the game function
    //}
    //calls the function
  //  game ();

  //Get buttons
const buttonCockroach= document.getElementById("cockroach");
const buttonFoot= document.getElementById("foot");
const buttonNuclearBomb= document.getElementById("nuclear");

//add event listeners to the buttons

 buttonCockroach.addEventListener("click", functionCockroach => {
    playerSelection = "cockroach";
    let computerSelection = computerPlay();
    console.log (playRound(playerSelection,computerSelection));

 });
 
buttonFoot.addEventListener("click", functionFoot => {
    playerSelection= "foot";
    let computerSelection= computerPlay();
    console.log(playRound(playerSelection,computerSelection));
});

buttonNuclearBomb.addEventListener("click", functionNuclear => {
playerSelection="nuclear-bomb";
let computerSelection=computerPlay();
console.log(playRound(playerSelection,computerSelection));
});

/*
 // Overriding console object
 let console = {};
            
 // Getting div to insert logs
 let logger = document.getElementById("logger");
 
 // Adding log method from our console object
 console.log = text =>
 {
     let element = document.createElement("div");
     let txt = document.createTextNode(text);
 
     element.appendChild(txt);
     logger.appendChild(element);
 }
 */
//create a paragraph 
let para= document.createElement("p");
 let scores= document.getElementById("scores");
 scores.appendChild(para);
 para.innerHTML="wuf"
 


//Anounce the winner
