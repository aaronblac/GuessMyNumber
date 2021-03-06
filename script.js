'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector(".check").addEventListener('click', ()=>{
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    if (!guess) {
        //when there is no input
        document.querySelector(".message").textContent = "No number!";
    } else if (guess === secretNumber){
        //when player wins
        document.querySelector(".message").textContent = "Correct Number!";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width - "30rem";
        if (score > highScore)
        {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    }else if (guess !== secretNumber){

        if(score > 1){
            document.querySelector(".message").textContent = guess >secretNumber ? "Too High!" : "Too Low!";
            score --;
            document.querySelector(".score").textContent = score;
        }else{
            document.querySelector(".message").textContent = "You Lost, Game Over!"
            document.querySelector(".score").textContent = 0;
        }
    }
})

document.querySelector(".again").addEventListener("click", ()=>{
    secretNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent= score;
    document.querySelector(".number").style.width = "15rem";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".guess").value = "";


})