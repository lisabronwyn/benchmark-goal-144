alert("Guess a number between 1 and 100!")

const random = Math.floor((Math.random() * 100) + 1);
let counter = 0;
const maxGuesses = 5;
const guess = 0;

document.getElementById("checkButton").onclick = () => {
    const guess = document.getElementById("guess").value;
    checkGuess(guess);
    counter++;

    if (counter == maxGuesses) {
        alert("Game Over");
        document.getElementById("checkButton").disabled = true;
    }
}

function checkGuess(guess) {
    if (guess == random) {
        alert("You win!");
        document.getElementById("checkButton").disabled = true;
    }
    if (guess > random) {
        alert("Too high!");
        document.getElementById("guess").value = '';
    } else if (guess < random) {
        alert("Too low!");
        document.getElementById("guess").value = '';
    }

    function myfunction() {
        if (a == "exit");
        return;
    }
}
