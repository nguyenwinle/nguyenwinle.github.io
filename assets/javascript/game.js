
// when our html and css is loaded on page, we then run our js
$(document).ready(function() {
    // create an array for our alphabet;
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // set a random letter to a variable
    var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

    // set up counter variables for wins, losses, guesses left and letters guessed.
    var winCount = 0;
    var lossCount = 0;
    var guesses = 10;
    var guessLetters = [];

    // use onkeyup function for when the letter is pressed and when the user lets go of button
    document.onkeyup = function(event) {

        // set the key to Userguess
        var userGuess = event.key;

        // when the user hits a key
            // decrement total guesses
            // add the key to the empty array
            // add our guesses and guesses to our html
        if (userGuess) {
            guesses--;
            guessLetters.push(userGuess);
            document.querySelector(".guessleft").innerHTML = guesses;
            document.querySelector(".yourguesses").innerHTML = guessLetters;
        }

        // when the users guess is the same as the random letter
            // increment win count
            // then reset everything except our losses and wins
        if (userGuess === randomLetter) {
            winCount = winCount + 1;
            document.querySelector(".guessleft").innerHTML = "10";
            guesses = 10;
            document.querySelector(".yourguesses").innerHTML = "";
            guessLetters = [];
            document.querySelector(".win").innerHTML = winCount;
            alert("You win!");       
        }

        // when the guesses reach 0
            // decrement losses and add it to our html
            // reset everything except losses and wins
        if (guesses === 0) {
            alert("Game Over!");
            lossCount++;
            document.querySelector(".loss").innerHTML = lossCount;
            document.querySelector(".guessleft").innerHTML = "10";
            guesses = 10;
            document.querySelector(".yourguesses").innerHTML = "";
            guessLetters = [];   
        }
    }
});


computerLetters.includes(UserInput);