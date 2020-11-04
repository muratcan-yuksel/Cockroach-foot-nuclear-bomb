/** The computer will be choosing a random move **/

function computerPlay () {
    let computerRandom = ["cockroach", "foot", "nuclear-bomb"];
     let computerChoice = computerRandom[Math.floor(Math.random() * computerRandom.length)];
    return computerChoice
    }
    /**Declare two variables to keep score of the game **/    
    let playerScore= 0;
    let computerScore= 0;
    
    
    /** play one round of the game
     * select paragraphs
     * add text contents to live update the message & the score
     *  **/
    
    function playRound (playerSelection, computerSelection) {
        let element = document.querySelector("p");
        let computerLiveScore= document.getElementById("computerLive");
        let playerLiveScore= document.getElementById("playerLive");
        if (playerScore===4 ) {
            alert("playerwin");
            playerLiveScore.textContent=5;
        }
        else if ( computerScore===4 ) {
            alert("compwin");
            computerLiveScore.textContent=5;
        }
        
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

//create a paragraph 
let para= document.createElement("p");
 let scores= document.getElementById("scores");
 scores.appendChild(para);
 para.innerHTML="wyyuf"
 


//Anounce the winner
