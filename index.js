let player1Score = 0;
let player2Score = 0;

function diceRoll () {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    let diceImagePlayer1 = document.querySelector("img.img1").setAttribute("src",`images/dice${randomNumber1}.svg`);
    let diceImagePlayer2 = document.querySelector("img.img2").setAttribute("src",`images/dice${randomNumber2}.svg`);

    if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerHTML = "Player 1 wins!";
            player1Score++;
            document.querySelector("p.score-counter-1").innerHTML = player1Score;
    } else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML = "Player 2 wins!";
            player2Score++;
            document.querySelector("p.score-counter-2").innerHTML = player2Score;
    } else
            document.querySelector("h1").innerHTML = "Draw!";
}

document.querySelector("button").addEventListener("click", diceRoll);
