$(document).ready(function() {
     
    var winCount = 0;
    var lossCount = 0;
    var randomNum = Math.floor(Math.random() * 120 + 19);
    var num = Math.floor(Math.random() * 12 + 1);
    var num2 = Math.floor(Math.random() * 12 + 1);
    var num3 = Math.floor(Math.random() * 12 + 1);
    var num4 = Math.floor(Math.random() * 12 + 1);
    var total = 0;

    $(".random").text(randomNum);

    function update() {
        // reset 

        total = 0;
        $(".score").text(total);

        randomNum = Math.floor(Math.random() * 120 + 19);
        $(".random").text(randomNum);

    }

    $(".diamond").on("click", function() {
        total += num;


        $(".score").text(total);

        if (total === randomNum) {
            alert("You win!");
            winCount++;
            $(".win").text(winCount);
            
            update();
                        
        }

        if (total > randomNum) {
            console.log(total);
            alert("You lose!");
            console.log("you lose");
            lossCount++;
            $(".loss").text(lossCount);
         
            update();

        }


    });

    $(".diamond2").on("click", function() {

        total += num2;
        $(".score").text(total);

        if (total === randomNum) {
            alert("You win!");
            winCount++;
            $(".win").text(winCount);
            
            update();
            total = 0;

        }

        if (total > randomNum) {
            console.log(total);
            alert("You lose!");
            console.log("you lose");
            lossCount++;
            $(".loss").text(lossCount);
            
            update();
         
        }

    });

    $(".diamond3").on("click", function() {

        total += num3;
        $(".score").text(total);

        if (total === randomNum) {
            alert("You win!");
            winCount++;
            $(".win").text(winCount);

            update();
     
    
        }

        if (total > randomNum) {
            console.log(total);
            alert("You lose!");
            console.log("you lose");
            lossCount++;
            $(".loss").text(lossCount);

            update();

        }

    });

    $(".diamond4").on("click", function() {

        total += num4;
        $(".score").text(total);

        if (total === randomNum) {
            alert("You win!");
            winCount++;
            $(".win").text(winCount);
            
            // reset
            update();

        }


        if (total > randomNum) {
            console.log(total);
            alert("You lose!");
            console.log("you lose");
            lossCount++;
            $(".loss").text(lossCount);
            
            //reset
            update();
            
        }
    

    });

});