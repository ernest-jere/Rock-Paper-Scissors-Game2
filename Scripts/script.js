 //display prompt to start a game
 function startGame () {
     displayPanelID = document.getElementById("displayPanel");
     displayPanelID.setAttribute("style", "background-color: black;  font-size: 32px; color: white;");
     document.getElementById("para").textContent =`Press button to start a game!`;
 }

 
//function that plays a single round of Rock Paper Scissors.
function playerChoice(btnPressed) {         
    let userPlay = btnPressed.textContent;
    let score = playRound(userPlay, computerPlay()); 
}

// function to randomly return either Rock, Paper or Scissors. 
function computerPlay () {
    let selectedItem = Math.floor(Math.random() * 3) + 1;
    let play;
    switch (selectedItem){
        case 1: 
        play = "Rock";
        break;
        case 2: 
        play = "Paper";
        break;
        case 3: 
        play = "Scissors";      
    }
    return play;
}
 
// cointers
let roundCounter = 0;
let yourCount = 0;
let computerCount = 0;
// function that plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "Rock" && computerSelection == "Rock") ||
        (playerSelection ==  "Paper" && computerSelection == "Paper") || 
        (playerSelection == "Scissors" && computerSelection == "Scissors")) {
        
        roundCounter++
        const display = document.getElementById("displayPanel");
        display.setAttribute("style", "background-color: white;  font-size: 32px; color: blue;")
        document.getElementById("para").textContent = `Round ${roundCounter}: You Win!`;
        yourCount++;
    } else {
        roundCounter++
        const display = document.getElementById("displayPanel");
        display.setAttribute("style", "background-color: white;  font-size: 32px; color: blue;")
        document.getElementById("para").textContent = `Round ${roundCounter}: You lose!`;
        computerCount++;
    }

    if (yourCount == 5 || computerCount == 5) {
        displayOverallWinner(yourCount, computerCount);
        roundCounter = 0
        yourCount = 0;
        computerCount = 0;
    }
  
}

//hide button panel and display the overall winner after one player reaches 5 points
function displayOverallWinner(playerCounter, computerCounter){
    const winnerDisplay = document.getElementById("buttonPanel");
    winnerDisplay.style.display = "none";
    const winnerdiv = document.createElement("div");
    winnerdiv.setAttribute("id", "winnerPanel");
    const containerDiv = document.getElementById("container");
    containerDiv.appendChild(winnerdiv);
    winnerdiv.addEventListener("click", function(){
        buttonPanel.style.display = "flex"
        this.style.display = "none"
        startGame();})

    if (playerCounter > computerCounter ) {
        winnerdiv.setAttribute(
            "style", "background-color: green;  font-size: 32px; color: white; box-shadow: 3px 3px 8px gray")
        winnerdiv.textContent = 
            `You are overall Winner by: ${playerCounter} to ${computerCounter}. Press to play again!!`;
    } else {
        winnerdiv.setAttribute(
            "style", "background-color: red;  font-size: 28px; color: white; box-shadow: 3px 3px 8px gray")
        winnerdiv.textContent =
            `computer is overall winner by: ${computerCounter} to ${playerCounter}. Press to play again!!`;
    }
} 
