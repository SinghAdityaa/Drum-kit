
// document.querySelectorAll("button")[1].addEventListener("click",handleClick);
// document.querySelectorAll("button")[2].addEventListener("click",handleClick);
// document.querySelectorAll("button")[3].addEventListener("click",handleClick);
// document.querySelectorAll("button")[4].addEventListener("click",handleClick);
// document.querySelectorAll("button")[5].addEventListener("click",handleClick);
// document.querySelectorAll("button")[6].addEventListener("click",handleClick);


var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

    function handleClick() {
        var helloinnerhtml = this.innerHTML;
        keySound(helloinnerhtml);
        buttonAnimation(helloinnerhtml);
    }
}

document.addEventListener("keydown", keyPressed);

function keyPressed(event) {
    keySound(event.key);
    buttonAnimation(event.key);
}

function keySound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var bass = new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log(key);
    }
}

 function buttonAnimation(currentkeys){
   var animation= document.querySelector("."+currentkeys)
   animation.classList.add("pressed");
 

 setTimeout( function(){
    animation.classList.remove("pressed");
 }, 100);

}

// var
// audioplay.play()