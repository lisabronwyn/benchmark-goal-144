alert("Guess a number between 1 and 100!")

var random = Math.floor((Math.random() * 100) + 1);
var counter = 0;
var maxGuesses = 5;
var guess = 0;

document.getElementById("checkButton").onclick = function() {
    var guess = document.getElementById("guess").value;
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
