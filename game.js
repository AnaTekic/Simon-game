
let gamePattern = [];
let buttonColours = ["red", "blue", "yellow", "green"];


function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
 console.log(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  let audio = new Audio("sounds/" + randomChosenColour + ".mp3");

  audio.play();
}

$(document).keypress(nextSequence)
