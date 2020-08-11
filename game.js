
let gamePattern = [];
let buttonColours = ["red", "blue", "yellow", "green"];
let userClickedPattern = [];

//randomly generate computer sequence with flash and audio
function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playsound(randomChosenColour) // dodaj koji zvuk

}

$(document).keypress(nextSequence)

//log the user clicked button and add it to user array
$( ".btn" ).click(function(event) {
  let userChosenColour = event.target.id;
  userClickedPattern.splice(userClickedPattern.length, 0, userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour)
  animatePress(userChosenColour)
});


//function that plays appropriate sound, to be implemented into other functions
function playSound (name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};

//grey out user user Chosen Colour
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed")

setTimeout(function() {
  $("#"+ currentColour).removeClass('pressed'); }, 500);
};
