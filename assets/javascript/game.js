var nameFruit = document.getElementById("fruitName");
var imageFruit = document.getElementById("image");
var winsTally = document.getElementById("wins");
var wordDashes = document.getElementById("currentWordDashes");
var remainingGuesses = document.getElementById("guessesRemaining");
var lettersGuessed = document.getElementById("guessedLetters");

var wordBank = ["apple", "pear"];


// Computer chooses which word to play 
var correctWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(correctWord);

// Create Dashes 
var dashesArray = [];
for (var i = 0; i < correctWord.length; i++) {
    dashesArray[i] = "_";
}
wordDashes.textContent = dashesArray.join(" ");

//Letters Remaining
var lettersRemaining = correctWord.length;

// Wins Tally
winsTally.textContent = 0;

// Used Letters
var usedLettersArray = [];

//Amount of remaining guesses
remainingGuesses.textContent = 10;
guesses = remainingGuesses.textContent

//when a key is pushed
document.onkeyup = function (event) {
    var userGuess = event.key;
    if ((lettersRemaining > 0) && (guesses > 0)) {
        playGame();
    }

    else if (lettersRemaining === 0) {
        winGame();
    }

    else {
        alert("Sorry, you lose! The correct word was " + correctWord + ".")
        resetGame();
    }

}

// if they can continue to play
function playGame() {
    var userGuess = event.key;
    alert("User guess: " + userGuess);
    
    if (correctWord.includes(userGuess)) {
        alert("You guessed correctly!")
        dashesArray[i] = userGuess;
        wordDashes.textContent = dashesArray.join(" ");
        lettersRemaining--;
    }

    else {
        alert("You guessed incorrectly!");
        usedLettersArray.push(userGuess);
        lettersGuessed.textContent = usedLettersArray;
    }

    remainingGuesses.textContent--;
    console.log(remainingGuesses);
    console.log(guesses);

    if (remainingGuesses === 0) {
        endGame();
    }

    else if (lettersRemaining === 0) {
        winGame();
    }

}

// if they win the game & get the word
function winGame() {
    alert("Congratulations! You Won! The correct word was " + correctWord + ".");
    winsTally.textContent++;
    resetGame()
}

//reset the game
function resetGame() {
    guesses = 10;

}