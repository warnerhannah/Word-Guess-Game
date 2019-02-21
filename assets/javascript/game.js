var nameFruit = document.getElementById("fruitName");
var imageFruit = document.getElementById("image");
var winsTally = document.getElementById("wins");
var wordDashes = document.getElementById("currentWordDashes");
var remainingGuesses = document.getElementById("guessesRemaining");
var lettersGuessed = document.getElementById("guessedLetters");
var guesses = 10;

var wordBank = ["apple", "pear"];


// computer chooses which word to play 
var correctWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(correctWord);

remainingGuesses.textContent = guesses;

var dashesArray = [];
for (var i = 0; i < correctWord.length; i++) {
    dashesArray[i] = "_";
}
wordDashes.textContent = dashesArray;

/* when user presses a key the game begins */

document.onkeyup = function (event) {

    // takes in key as input and alerts user
    var userGuess = event.key;
    alert("User guess: " + userGuess);

    
    if (correctWord.includes(userGuess)) {
        alert("You guessed correctly!")

    }

    //reduce remaining guesses
    guesses--;
    remainingGuesses.textContent=guesses;


}