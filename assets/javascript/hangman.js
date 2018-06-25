$(document).ready(function () {
    var wins = 0;
    var guesses = 10;
    var words = ["tea", "easy", "cool", "win", "begin"];
    var computerGuess = words[Math.floor(Math.random() * words.length)];
    //This creates an array for random word
    var letters = computerGuess.split("");
    var dashes = [];
    var guessletters = [];

    for (var i = 0; i < letters.length; i++) {
        var letter = letters[i];
        dashes.push("-");
        document.querySelector("#cword").innerHTML = dashes.join(" ");
    }

    document.onkeyup = function(event) {
        var userInput = event.key;
        // loop through dash and loop through word

        for (var j = 0; j < letters.length; j++) {
            var char = letters[j];
            if (userInput === char) {
                dashes[j] = char;
                document.querySelector("#cword").innerHTML = dashes.join(" ");
            }   
        }
        
        if (userInput) {
            guesses--;
            guessletters.push(userInput);
            document.querySelector(".guess-remain").innerHTML = guesses;
            // document.querySelector(".your-guess").innerHTML = guessletters.join(" ");

            for (var k = 0; k < userInput.length; k++) {
                $(".your-guess").append('<div class = "col-md-1">' + userInput + '</div>');
                //document.querySelector(".col-md-1").innerHTML = gues;
            }
        }

        if (!dashes.includes("-")) {
            alert("You win!");
            wins = wins + 1;
            document.querySelector(".guess-remain").innerHTML = "10";
            guesses = 10;
            guessletters = [];
            document.querySelector(".wins").innerHTML = wins;
            document.querySelector(".your-guess").innerHTML = "";
            document.querySelector("#cword").innerHTML = "";
            dashes = [];

            var advance = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia", "Herzegovina"];
            var computer = advance[Math.floor(Math.random() * advance.length)];
            //This creates an array for random word
            var chars = computer.split("");


            for (var l = 0; l < chars.length; l++) {
                dashes.push("-");
                document.querySelector("#cword").innerHTML = dashes.join(" ");
            }

        }

        if (guesses === 0) {
            alert("You lose!");
            window.location.reload();
            
        }

        if (guessletters.length === 0) {
            $(".progress-bar").css("width", "100%");
        }

        if (guessletters.length === 1) {
            $(".progress-bar").css("width", "90%");
        }
        if (guessletters.length === 2) {
            $(".progress-bar").css("width", "80%");
        }
        if (guessletters.length === 3) {
            $(".progress-bar").css("width", "70%");
        }
        if (guessletters.length === 4) {
            $(".progress-bar").css("width", "60%");
        }
        if (guessletters.length === 5) {
            $(".progress-bar").css("width", "50%");
        }
        if (guessletters.length === 6) {
            $(".progress-bar").css("width", "40%");
        }
        if (guessletters.length === 7) {
            $(".progress-bar").css("width", "30%");
        }

        if (guessletters.length === 8) {
            $(".progress-bar").css("width", "20%");
        }
        if (guessletters.length === 9) {
            $(".progress-bar").css("width", "10%");
        }

        if (guessletters.length === 10) {
            $(".progress-bar").css("width", "0%");
        } 

        
    }
});