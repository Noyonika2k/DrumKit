//
var allButtons = document.querySelectorAll(".drum");
for (var i = 0; i < allButtons.length; i++) {

  allButtons[i].addEventListener("click", function()
  {
       var a = this.innerHTML;
                fun(a)  ;
              animate(a);      });
  }

  document.addEventListener("keydown", function(event)
{
    var j= event.key;
    fun(j);
    animate(j);
});



function fun(sound) {

  switch (sound) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "a":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "d":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case "j":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "k":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "l":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    default:

  }

  }
function animate(whatToChange)
{

  document.querySelector("."+whatToChange).classList.add("pressed");
  setTimeout(function()
    {
      document.querySelector("."+whatToChange).classList.remove("pressed");
    },100);
}


// function checkAns(level) {
//   if (userPattern.length === gamePattern.length) {
//     for (var i = 0; i <= level; i++) {
//       if (userPattern[i] !== gamePattern[i])
//         alert("lost");
//
//       else {
//         setTimeout(function() {
//           nextSeq();
//             }, 1000);
//            }
//           }
//   }
//     else{
//       alert("lost");
//     }
//
//
// }
