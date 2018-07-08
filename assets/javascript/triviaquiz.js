$(document).ready(function() {
     
    var blockchain = [{
        question: "1. What does P2P stand for?",
        choices: [
            "A: Password to Password",
            "B: Peer to Peer",
            "C: Product to Product",
            "D: Private Key to Public Key"
        ],
        correct : 1
    }, {
        question: "2. What is a node?",
        choices: [
            "A: A type of cryptocurrency",
            "B: A blockchain",
            "C: A computer on a blockchain network",
            "D: An exchange"
        ],
        correct: 2
    }, {
        question: "3. Who created Bitcoin?",
        choices: [
            "A: Satoshi Nakamoto",
            "B: Samsung",
            "C: John Mcafee",
            "D: china"
        ],
        correct: 0
    }, {
        question: "4. where do you store your cryptcurrency?",
        choices: [
            "A: Bank Account",
            "B: Floppy Disk",
            "C: Wallet",
            "D: In your pocket"
        ],
        correct: 2
    }, {
        question: "5. What are the different types of tokens?",
        choices: [
            "A: Platform",
            "B: Privacy",
            "C: Currency",
            "D: All of the above"
        ],
        correct: 3
    }, {
        question: "6. Where is the LEAST SAFE place to keep your cryptocurrency?",
        choices: [
            "A: In your pocket",
            "B: On an exchange",
            "C: On a hot wallet",
            "D: At your work desk"

        ],
        correct: 1
    }, {
        question: "7. Which is NOT apart of asymmetric encryption?",
        choices: [
            "A: Mining",
            "B: Public key",
            "C: Passphrase",
            "D: Private Key"

        ],
        correct: 1
    }, {
        question: "8. What is a blockchain?",
        choices: [
        "A: A type of cryptocurrency",
        "B: An exchange",
        "C: A distributed ledger on a peer to peer network",
        "D: A centralized ledger"
        ], 
        correct: 2
    }];

    // set empty variables
    var unanswered; 
    var seconds; 
    var time; 
    var answered; 
    var selected;
    var currentQuestion; 
    var correctAnswer; 
    var incorrectAnswer; 

    $('#start').on('click', function(){
        $(this).hide();
        newGame();
    });

    $('#startOver').on('click', function(){
        $(this).hide();
        newGame();
    });

    // this displays a new question
    function newQuestion(){
        // call the timer
        timer();
        
        // clear our answerpage
        $('#message').empty();
        $('#correctedAnswer').empty();

        answered = true;
        
        //sets up new questions & choices
        $('.question').html('<h3>' + blockchain[currentQuestion].question + '</h3>');
        for(var i = 0; i < 4; i++){
            var choices = $('<div>');
            var choice = blockchain[currentQuestion].choices[i];
            choices.html('<button type="button" class="btn btn-outline-primary">' + choice + '</button>');
            choices.attr({'data-index': i });
            choices.addClass('choice');
            $('.answerList').append(choices);
        }
    
        $('.choice').on('click',function(){
            selected = $(this).data('index');
            clearInterval(time);
            answerPage();
        });
    }

        // this resets the game
        function newGame(){
            $('#finalMessage').empty();
            $('#correctAnswers').empty();
            $('#incorrectAnswers').empty();
            $('#unanswered').empty();
            currentQuestion = 0;
            correctAnswer = 0;
            incorrectAnswer = 0;
            unanswered = 0;
            newQuestion();
        }

    // this function will create the timer starting at 30
    function timer() {
        seconds = 30;
        $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
        answered = true;
 
        time = setInterval(showCountdown, 1000);
    }

    // this will count down the timer
    function showCountdown(){
        seconds--;
        $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
        if(seconds < 1){
            clearInterval(time);
            answered = false;
            answerPage();
        }
    }


    // this displays the answer to the question
    function answerPage(){
        $('#timeLeft').empty();
        $('#currentQuestion').empty();
        $('.choice').empty(); //Clears question page
        $('.question').empty();

        var rightAnswer = blockchain[currentQuestion].choices[blockchain[currentQuestion].correct];
        var rightAnswerIndex = blockchain[currentQuestion].correct;
        //checks to see correct, incorrect, or unanswered
        if((selected == rightAnswerIndex) && (answered == true)){
            correctAnswer++;
            $('#message').html("This is correct!");
        } else if ((selected != rightAnswerIndex) && (answered == true)){
            incorrectAnswer++;
            $('#message').html("This is incorrect!");
            $('#correctedAnswer').html('The correct answer is: ' + rightAnswer);
        } else {
            unanswered++;
            $('#message').html("You are out of time!");
            $('#correctedAnswer').html('The correct answer is: ' + rightAnswer);
            answered = true;
        }
        
        if(currentQuestion == (blockchain.length-1)){
            setTimeout(finalScore, 3000)
        } else{
            currentQuestion++;
            setTimeout(newQuestion, 3000);
        }
        
    }

    // displays the last page with the final score
    function finalScore(){
        $('#timeLeft').empty();
        $('#message').empty();
        $('#correctedAnswer').empty();

        $('#finalMessage').html("Done!");
        $('#correctAnswers').html("Correct Answers: " + correctAnswer);
        $('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
        $('#unanswered').html("Unanswered: " + unanswered);
        $('#startOver').addClass('reset');
        $('#startOver').show();
        $('#startOver').html('<button type="button" class="btn btn-outline-primary">' + 'Start Over?' + '</button>');
    }


});