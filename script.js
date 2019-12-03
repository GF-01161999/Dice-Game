let rollBtn = document.getElementById("roll-btn");
let score = document.getElementById("score"); 
let face = document.getElementById("dice-face");
let dice = document.getElementById("di");
let playerHeading = document.getElementById("player-heading");
let reset = document.getElementById("restart");
let scoreUpdate = 0;

let check = (score) => {
    if(score >= 20){
        playerHeading.textContent = "You win!"
        rollBtn.style.display = "none";
        reset.style.display = "flex";
        score.textContent = "0"
    }
};


rollBtn.addEventListener("click", ()=> {
    let diceRoll = Math.ceil(Math.random()* 6)
    console.log(diceRoll);
    if(diceRoll == 1){
        playerHeading.textContent = "You Lost!"
        rollBtn.style.display = "none"
        reset.style.display = "flex"
        di.src = "img/dice" + diceRoll + ".png"
        scoreUpdate = 0;
    } else if(scoreUpdate >= 20){
        playerHeading.textContent = "You Win!"
        reset.style.display = "flex"
        scoreUpdate = 0;
    } else if(scoreUpdate <= 20){
        di.src = "img/dice" + diceRoll + ".png"
        scoreUpdate += diceRoll
        console.log(diceRoll)
        score.textContent = scoreUpdate
    }
    check(scoreUpdate);
});

reset.addEventListener("click", () =>{
    rollBtn.style.display = "flex";
    reset.style.display = "none";
    playerHeading.textContent = "Player 1"
    score.textContent = "0"
});