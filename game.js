
let gamePattern = [];
let buttonColours = ["red", "blue", "yellow", "green"];
let userClickedPattern = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  let audio = new Audio("sounds/" + randomChosenColour + ".mp3");

  audio.play();
}

$(document).keypress(nextSequence)

$( ".container" ).click(function(event) {
  let userChosenColour = event.target.id;
  userClickedPattern.splice(userClickedPattern.length, 0, userChosenColour);
  console.log(userClickedPattern);
});
