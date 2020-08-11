
let gamePattern = [];
let redSound = new Audio("./sounds/red.mp3");
let blueSound = new Audio("./sounds/blue.mp3");
let greenSound = new Audio("./sounds/green.mp3");
let yellowSound = new Audio("./sounds/yellow.mp3");

//connect random number with a color
let buttonColors = ["red", "blue", "yellow", "green"];
let randomChosenColor= buttonColors[nextSequence()];

//put randomly chosen color into game array
gamePattern.push(randomChosenColor);

//select random number  to apply to the array 0-3
function nextSequence() {
let randomNumber = Math.floor(Math.random()*4);
return randomNumber
};

//select button with the same id as randomChosenColor


$(document).keypress(function() {
 //add and remove class to simulate flash
   $(`#${randomChosenColor}`).addClass("pressed");
   setTimeout(function () {
    $(`#${randomChosenColor}`).removeClass('pressed');
}, 200);

  //play appropriate sound
  switch(randomChosenColor) {
  case "red":
    redSound.play();
    break;
  case "blue":
    blueSound.play();
    break;
    case "green":
      greenSound.play();
      break;
    case "yellow":
      yellowSound.play();
      break;
  default:
    // code block
}

});
