function diceRoll () {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    let diceImagePlayer1 = document.querySelector("img.img1").setAttribute("src",`images/dice${randomNumber1}.svg`);
    let diceImagePlayer2 = document.querySelector("img.img2").setAttribute("src",`images/dice${randomNumber2}.svg`);

    if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerHTML = "Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML = "Player 2 wins!";
    } else
            document.querySelector("h1").innerHTML = "Draw!";
}

diceRoll()
