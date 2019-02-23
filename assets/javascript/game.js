var nameFruit = document.getElementById("fruitName");
var imageFruit = document.getElementById("image");
var winsTally = document.getElementById("wins");
var wordDashes = document.getElementById("currentWordDashes");
var remainingGuesses = document.getElementById("guessesRemaining");
var lettersGuessed = document.getElementById("guessedLetters");

var wordBank = ["peach", "pear", "orange", "lime", "mango"];


// Computer chooses which word to play 
function computerGuess() {
    var word = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(word);
    return word;
}


correctWord = computerGuess();

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
var guesses = 10;
remainingGuesses.textContent = guesses;

//when a key is pushed
document.onkeyup = function (event) {

    if (lettersRemaining > 0 && guesses > 0) {
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

function replaceDashWithLetter(letter, word) {
    for (var i = 0; i < word.length; i++) {
        if (letter === word[i]) {
            console.log("letter from word", letter);
            dashesArray[i] = letter;
        }
    }
    wordDashes.textContent = dashesArray.join(" ")
}

// if they can continue to play
function playGame() {
    var userGuess = event.key;
    console.log(dashesArray)
    alert("User guess: " + userGuess);

    if (correctWord.includes(userGuess)) {
        replaceDashWithLetter(userGuess, correctWord);
        lettersRemaining--;
        usedLettersArray.push(userGuess);
        lettersGuessed.textContent = usedLettersArray;
        alert("You guessed correctly!")
    }

    else {
        alert("You guessed incorrectly!");
        usedLettersArray.push(userGuess);
        lettersGuessed.textContent = usedLettersArray;
    }

    guesses--;
    remainingGuesses.textContent = guesses;
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
    nameFruit.textContent = correctWord;
    winsTally.textContent++;
    alert("Congratulations! You Won! The correct word was " + correctWord + ".");
    resetGame()
}

function endGame() {
    alert("Sorry, you lose! The correct word was " + correctWord + ".")
    resetGame();
}


//reset the game
function resetGame() {
    
    usedLettersArray = [];
    lettersGuessed.textContent = usedLettersArray;

    guesses = 10;
    remainingGuesses.textContent = guesses;

    correctWord = computerGuess();
    
    dashesArray= [];
    for (var i = 0; i < correctWord.length; i++) {
        dashesArray[i] = "_";
    }
    wordDashes.textContent = dashesArray.join(" ");

    lettersRemaining = correctWord.length;
}