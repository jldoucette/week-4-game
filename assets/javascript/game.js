  var win=0;
  var lose=0;
  var numberofdiamonds=4;
  var diamondvaluehigh=11;
  var arrDiamondValues=[];
  var diamond1value;
  var diamond2value;
  var diamond3value;
  var diamond4value;
  var targetScoreValue = Math.floor(Math.random() * 101) + 19;
  var currentScore=0;
  var buttonValue;


  console.log("Target: "+targetScoreValue);
 
  $(document).ready(function() {

  function assignDiamondValues() {
    console.log("Started assignDiamondValues");
 

        for(var i = 0; i < numberofdiamonds; i++)
        {
            var uniquenum = true;
            var n = Math.round(Math.random()*diamondvaluehigh + 1);
            for(var j = 0; j < arrDiamondValues.length; j++)
            {
                if(arrDiamondValues[j] == n)
                {
                    uniquenum = false;
                    console.log("Got a Duplicate");
                }
            }
            if(uniquenum)
            {
              console.log("Unique Value");
                arrDiamondValues.push(n);
            }
            else
            {
                i--;
            }
         
          diamond1value=arrDiamondValues[0];
          diamond2value=arrDiamondValues[1];
          diamond3value=arrDiamondValues[2];
          diamond4value=arrDiamondValues[3];
          console.log("Exiting assignDiamondValues function");

        }
      }
         assignDiamondValues();
    console.log("Diamond Value Array: "+arrDiamondValues);
    console.log("Initial D1: "+diamond1value);
    console.log("Initial D2: "+diamond2value);
    console.log("Initial D3: "+diamond3value);
    console.log("Initial D4: "+diamond4value);

function placeDiamonds() {
  console.log("arrDiamondValues in Place Diamonds "+arrDiamondValues);
   for (var i=0; i < arrDiamondValues.length; i++) {
        picture=i+1;
        var DiamondButton=$("<img>");
        DiamondButton.attr("class","diamond-button arrDiamondValues diamond-button-color diamond-button-image");

        DiamondButton.attr("src", "assets/images/diamond"+ picture +".jpg");      
     

        DiamondButton.attr("data-diamondValue", arrDiamondValues[i]);
        DiamondButton.text("Value is " + arrDiamondValues[i]);
        console.log("Diamond Button value is " + arrDiamondValues[i]);
        console.log("Diamond Button is: "+ DiamondButton);
        $("#diamond-button").append(DiamondButton);
        console.log("Value is: "+ arrDiamondValues[i]);
      }
      console.log("supposed to have placed diamonds");

        var targetMessage=$("#target");
        targetMessage.html("<h2><strong>Target Score: </strong>" + targetScoreValue +"</h2>");
        targetMessage.append(targetMessage);
        var currentScoreMessage=$("#current");
        currentScoreMessage.html("<h2 id='current-score'><strong>Current Score: </strong>" + currentScore +"</h2>");
        currentScoreMessage.append(currentScoreMessage);
        
        var scoreUpdate=$("#wins");
        scoreUpdate.html("<h2><strong>Wins: </strong>"+ win + "</h2>");
        scoreUpdate.append(scoreUpdate);
        
        var scoreUpdate=$("#losses");
        scoreUpdate.html("<h2><strong>Losses: </strong>"+ lose + "</h2>");
        scoreUpdate.append(scoreUpdate);

        var replayTrigger=$("#replay");
        replayTrigger.html("<h2><em>Game in progress! Start Guessing!</em></h2>");
        replayTrigger.append(replayTrigger);



       $(".diamond-button").on("click", function() {
        console.log("CurrentScore before click was "+ currentScore);
         var buttonValue=parseInt($(this).attr("data-diamondValue"));
         console.log("Button Value is "+buttonValue);
        currentScore=currentScore+buttonValue;
        console.log("CurrentScore is now "+currentScore);
        var currentScoreMessage=$("#current");
        currentScoreMessage.html("<h2 id='current-score'><strong>Current Score: </strong>" + currentScore +"</h2>");
        currentScoreMessage.append(currentScoreMessage);
        checkScore();
      });
    }
     console.log("About to execute placeDiamonds");
    placeDiamonds();
  

  function checkScore() {
    console.log("checking score");
    if (currentScore==targetScoreValue) {
     $(".diamond-button").off("click"); 
     var winMessage=$("#target");
     winMessage.html("<h2 id='winStyle'><strong>You Win!!!</strong></h2>");
     winMessage.append(winMessage);
     win++;
       var scoreUpdate=$("#wins");
     scoreUpdate.html("<h2><strong>Wins: </strong>"+ win + "</h2>");
     scoreUpdate.append(scoreUpdate);
     promptNewGame();

    }  
    else if (currentScore>targetScoreValue) {
      $(".diamond-button").off("click");
      var winMessage=$("#target");
     winMessage.html("<h2 id='loseStyle'><strong>Sorry you lost!!!</strong></h2>");
     winMessage.append(winMessage);
     lose++;
         var scoreUpdate=$("#losses");
     scoreUpdate.html("<h2><strong>Losses: </strong>"+ lose + "</h2>");
     scoreUpdate.append(scoreUpdate);
     promptNewGame();
    }
  }

function promptNewGame() {
    var replayTrigger=$("#replay");
     replayTrigger.html("<h2><strong>Press Any Key to Try Again!</strong></h2>");
     replayTrigger.append(replayTrigger);
     document.onkeyup = function(event) {
    var replayTrigger=$("#replay");
     replayTrigger.html("<h2></h2>");
     replayTrigger.append(replayTrigger);
     continueGame();
   }
}
  function continueGame() {
     document.onkeyup = function(event) {};
  numberofdiamonds=4;
  diamondvaluehigh=11;
  arrDiamondValues=[];
  diamond1value;
  diamond2value;
  diamond3value;
  diamond4value;
  targetScoreValue = Math.floor(Math.random() * 101) + 19;
   console.log("New Target: "+targetScoreValue);
  currentScore=0;
  buttonValue;  
 
  assignDiamondValues();
  var DiamondButton=$("#diamond-button");
  DiamondButton.html("");
  placeDiamonds();
}
  });
