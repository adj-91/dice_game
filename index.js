let diceImg = document.getElementById('diceImg');
let roll = document.getElementById('roll');
let score = document.getElementById('score');

diceImg.style.visibility = "hidden";


const scoreHandler = (playerRoll) => {
    let playerScore = parseInt(score.innerHTML);
    let result = playerScore + playerRoll;
    score.innerHTML = result;
}

const dieHandler = (playerRoll) => {
    diceImg.src=`./img/dice${playerRoll}.png`;
}

document.getElementById('button').addEventListener("click", () => {

    diceImg.style.visibility = "visible";

    let random = Math.floor(Math.random() * 6)+1;

    roll.innerHTML = random;
    scoreHandler(random);
    dieHandler(random);

    if (score.innerHTML > 20) {
        window.alert(`Congratulations you win! Final score: ${score.innerHTML}`);
        diceImg.style.visibility = "hidden";
        score.innerHTML = 0;
        roll.innerHTML = 0;
    }
    if (random === 1) {
        window.alert("You rolled a 1! You lose!");
        diceImg.style.visibility = "hidden";
        score.innerHTML = 0;
        roll.innerHTML = 0;
    }

});