var num_btn = document.querySelectorAll(".drum").length;

for (var i = 0; i < num_btn; i++) {



  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    play_Aduio(buttonInnerHTML);
    animation_But(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  play_Aduio(event.key);
  animation_But(event.key);
});


function play_Aduio(key)
{
  switch (key) {
    case "w":

      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:

  }

}

function animation_But(currentKey)
{
  var pressed_key = document.querySelector("." + currentKey);

  pressed_key.classList.add("pressed");

  setTimeout(
    function ()
    {
      pressed_key.classList.remove("pressed");
    },
    100
  );
}
