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
        let element = document.querySelector("#liveText");
        let computerLiveScore= document.getElementById("computerLive");
        let playerLiveScore= document.getElementById("playerLive");
        //This one increments the score manually. Don't ask why it doesn't do it by itself, I have no idea.
        if (playerScore===4 ) {
            //the next anounces the winner at the end with the same text that anounces the winnner each time
            element.textContent= "Machines are rising. This time you were lucky enough to win.";
            playerLiveScore.textContent="Player = " + 5;
            //disable buttons
            document.getElementById("buttonCockroach").disabled=true;
            document.getElementById("buttonFoot").disabled=true;
            document.getElementById("buttonNuclearBomb").disabled=true;
        }
        else if ( computerScore===4 ) {
              //the next anounces the winner at the end with the same text that anounces the winnner each time
            element.textContent= "You've lost against the machine. Let that sink in.";
            computerLiveScore.textContent="CPU = " + 5;
            //disable buttons
            document.getElementById("buttonCockroach").disabled=true;
            document.getElementById("buttonFoot").disabled=true;
            document.getElementById("buttonNuclearBomb").disabled=true;
        }
        
    if (playerSelection === "cockroach") {
        if (computerSelection === "foot") {
            computerScore++;
            element.textContent="Foot squishes cockroach . You lost!" ;
            computerLiveScore.textContent="CPU = " + computerScore;
        }
        else if (computerSelection==="nuclear-bomb") {
            playerScore++;
            element.textContent= "Cockroach survives nuclear-bomb. You win!" ;
            playerLiveScore.textContent="Player = " + playerScore;
        } 
      
        else {
            element.textContent= "Tie!"
        }
    }
    else if (playerSelection==="foot") {
        if (computerSelection== "nuclear-bomb") {
            computerScore++;
            element.textContent= "Nuclear bomb destroys foot. You lost!" ;
            computerLiveScore.textContent="CPU = " + computerScore;
        }
        else if (computerSelection==="cockroach") {
            playerScore++;
            element.textContent="Foot squishes cockroach. You win!" ;
            playerLiveScore.textContent="Player = " + playerScore;
        }
        else {
            element.textContent= "Tie!"
        }
    }
    else if (playerSelection==="nuclear-bomb") {
        if (computerSelection==="cockroach") {
            computerScore++;
            element.textContent= "Cockroach survives nuclear-bomb. You lost!" ;
            computerLiveScore.textContent="CPU = " + computerScore;
        }
        else if (computerSelection==="foot") {
            playerScore++;
            element.textContent= "Nuclear bomb destroys foot. You win!" ;
            playerLiveScore.textContent="Player = " + playerScore;
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

//get the scores div

 let scores= document.getElementById("scores");
/*
THIS CODE IS NOT NECESSARY ANYMORE
//Anounce the winner (the text is in the playround function)
let announcement= document.createElement("p");
announcement.setAttribute("id", "anounceWinner")
scores.appendChild(announcement);
*/
//restart button
let restartButton= document.getElementById("restart");
//reload the page
restartButton.addEventListener("click", functionRestart =>{
location=location;

});
//The core functionality of the game has finished. From here, the styling goes:
//document.getElementById("computerLive").style.border= "2px solid black";