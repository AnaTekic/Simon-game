let gamePattern = [];
let buttonColours = ["red", "blue", "yellow", "green"];
let userClickedPattern = [];
let level = 0;
let started = false;


//function that plays appropriate sound, to be implemented into other functions



//randomly generate computer sequence with flash and audio, track and log the level
function nextSequence() {
  userClickedPattern = [];
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  level++;

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  $("#level-title").text("Level " + level);

  playSound(randomChosenColour) // dodaj koji zvuk

};

//sound function, implementable for both players
function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};

//log the user clicked button and add it to user array, run check answer to see if correct
$(".btn").click(function(event) {
  let userChosenColour = event.target.id;
  userClickedPattern.splice(userClickedPattern.length, 0, userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour)
  animatePress(userChosenColour)
  checkAnswer(userClickedPattern.length - 1)

});



//grey out user user Chosen Colour
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed")

  setTimeout(function() {
    $("#" + currentColour).removeClass('pressed');
  }, 100);
};

// start the game sequence, only the first time a button is clicked
$(document).keypress(function() {
  if (!started) {
    nextSequence();
    started = true;
  }
});


function checkAnswer(currentLevel) {
  //check if current level (last item in the user array is the same as for game)
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    console.log("success");
//if user clicked the samenumber  of times, while successfully guessing the current level, the game will give another color after 1 sec
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        userClickedPattern = []; //reset the number of user clicks
        nextSequence();
      }, 1000);

    }
  } else {
    console.log("wrong");
    let wrongAudio = new Audio ("./sounds/wrong.mp3");
    wrongAudio.play();
    $("body").addClass("game-over");

    setTimeout(function() {
      $("body").removeClass('game-over');
    }, 300);
    $("#level-title").text("Game over, press any key to restart");
    startOver();

  };

};
//start over - reset values
function startOver() {

  started = false;
  level=0;
  gamePattern= [];
}
