    var gemSum = 0; 
    var wins = 0;
    var losses = 0; 

    var randomScore = Math.floor(Math.random()*100);
    
    var randomGenArray = ["randomGem1", "randomGem2", "randomGem3", "randomGem4" ];

      for (var i = 0; i < randomGenArray.length; i++) {
        randomGenArray[i] = Math.floor(Math.random()*10+1);
        console.log(randomGenArray[i]);

    }
    
    console.log("randomGem1: " + randomGem1);
    console.log("randomGem2: " + randomGem2);
    console.log("randomGem3: " + randomGem3);
    console.log("randomGem4: " + randomGem4);
    
    $("#guess-number").html(randomScore);
    
    function resetFunction() {
        randomGem1 = Math.floor(Math.random()*12+1);
        randomGem2 = Math.floor(Math.random()*12+1);
        randomGem3 = Math.floor(Math.random()*12+1);
        randomGem4 = Math.floor(Math.random()*12+1);
        console.log("Random Gem1: " + randomGem1 + " Random Gem2: " + randomGem2 + " Random Gem3" + randomGem3 + " Random Gem4: " + randomGem4);
        randomScore = Math.floor(Math.random()*100);
        $("#guess-number").html(randomScore);
        gemSum = 0; 
        console.log(gemSum);
        $("#win-lose").remove("bg-success");
        $("#win-lose").remove("bg-danger");

        
    }

    // create a function that randomizes gem values

        $("#gem1").on("click", function () {
            gemSum += randomGem1; 
            $("#gemCount").html(gemSum);
            console.log(gemSum);
            $("#win-lose").css("visibility", "hidden");
            
        });

        $("#gem2").on("click", function () {
            gemSum += randomGem2; 
            $("#gemCount").html(gemSum);
            console.log(gemSum);
            $("#win-lose").css("visibility", "hidden");

            
        });

        $("#gem3").on("click", function () {
            gemSum += randomGem3; 
            $("#gemCount").html(gemSum);
            console.log(gemSum);
            $("#win-lose").css("visibility", "hidden");


        });


        $("#gem4").on("click", function () {
            gemSum += randomGem4; 
            $("#gemCount").html(gemSum);
            console.log(gemSum);
            $("#win-lose").css("visibility", "hidden");


        });

        $(".button").on("click", function() {
            if (gemSum > randomScore) {
                losses++;
                $("#user-losses").html(losses);
                console.log("YOU LOSE, You went " + (gemSum - randomScore) + " over! ");
                $("#win-lose").addClass("bg-danger")
                $("#win-lose").css("visibility", "visible");
                $("#did-you-win").html("You Lost!");
                resetFunction(); 


            } else if (gemSum === randomScore) {
                wins++; 
                $("#win-lose").addClass("bg-success");
                $("#user-wins").html(wins);
                $("#win-lose").css("visibility", "visible");
                $("#did-you-win").html("You Won!");

                
                resetFunction(); 
                
            }

        
        });

