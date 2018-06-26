
// when our html and css is loaded on page, we then run our js
$(function() { 
    $("#one").addClass("progress-bar-color");

 });

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

        // letters only
 
        // when the user hits a key
            // decrement total guesses
            // add the key to the empty array
            // add our guesses and guesses to our html
        if (/^[a-zA-Z]/.test(userGuess) && userGuess.length === 1) {
            if (userGuess) {
                guesses--;
                guessLetters.push(userGuess);
                document.querySelector(".guessleft").innerHTML = guesses;

                for (var i = 0; i < userGuess.length; i++) {
                    $(".yourguesses").append('<div class = "col-md-1">' + userGuess + '</div>');
                    //document.querySelector(".col-md-1").innerHTML = guessLetters;
                }

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
                randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];  
            }

            // when the guesses reach 0
                // decrement losses and add it to our html
                // reset everything except losses and wins
            if (guesses === 0) {
                lossCount++;
                document.querySelector(".loss").innerHTML = lossCount;
                alert("You lose!");
                document.querySelector(".guessleft").innerHTML = "10";
                guesses = 10;
                document.querySelector(".yourguesses").innerHTML = "";
                guessLetters = [];  
                randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];  
                 
            }
        } else {
            alert("Invalid guess!");
        }

        if (guessLetters.length === 0) {
            $(".progress-bar").css("width", "100%");
        }

        if (guessLetters.length === 1) {
            $(".progress-bar").css("width", "90%");
        }
        if (guessLetters.length === 2) {
            $(".progress-bar").css("width", "80%");
        }
        if (guessLetters.length === 3) {
            $(".progress-bar").css("width", "70%");
        }
        if (guessLetters.length === 4) {
            $(".progress-bar").css("width", "60%");
        }
        if (guessLetters.length === 5) {
            $(".progress-bar").css("width", "50%");
        }
        if (guessLetters.length === 6) {
            $(".progress-bar").css("width", "40%");
        }
        if (guessLetters.length === 7) {
            $(".progress-bar").css("width", "30%");
        }

        if (guessLetters.length === 8) {
            $(".progress-bar").css("width", "20%");
        }
        if (guessLetters.length === 9) {
            $(".progress-bar").css("width", "10%");
        }

        if (guessLetters.length === 10) {
            $(".progress-bar").css("width", "0%");
        } 

    }


});