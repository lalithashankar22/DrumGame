
//detecting button press on screen
var  numberOfButtons=document.querySelectorAll("button").length;
for(i=0;i< numberOfButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function ()
    {
    var letter =this.innerHTML;
makeSound(letter);
buttonanimation(letter);
    });
}



//detecting keyboard press

//document.addEventListener("keypress",function(){alert("key was pressed");});
document.addEventListener("keypress",function(event){
  makeSound(event.key);
buttonanimation(event.key);});


// fuction to play a particular sound

function makeSound(key){

  switch (key) {
    case "w":
    var snare = new Audio('snare.mp3');
  snare.play();
      break;

      case "a":
      var tom1 = new Audio('tom-1.mp3');
    tom1.play();
        break;

        case "s":
        var tom3 = new Audio('tom-3.mp3');
        tom3.play();
          break;

          case "d":
          var kick = new Audio('kick-bass.mp3');
          kick.play();
            break;

            case "j":
            var tom4 = new Audio('tom-4.mp3');
          tom4.play();
              break;

              case "k":
              var tom2 = new Audio('tom-2.mp3');
              tom2.play();
                break;

                case "l":
                var crash = new Audio('crash.mp3');
              crash.play();
                  break;

    default: console.log(letter);

  }
}
//add animation to buttons
function buttonanimation(currentkey)
{
var activeKey = document.querySelector ("." + currentkey);
activeKey.classList.add("pressed");
setTimeout(function(){activeKey.classList.remove("pressed");},100);


}
