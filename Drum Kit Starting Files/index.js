var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrumButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         alert("I got clicked!");

//         // What to do when click detected.̥
//     });
// }
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// var w=document.querySelector(".w");
// w.addEventListener("click",function () {
// this.style.color="white";
// const audioElementw = new Audio("sounds/tom-1.mp3");
// audioElementw.play();
// });
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        // var buttonInnerHTML=
        buttonAnimation(buttonInnerHTML);

        switch (buttonInnerHTML) {
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
                var tom4 = new Audio("sounds/crash.mp3");
                tom4.play();
                break;
            case "k":
                var tom4 = new Audio("sounds/kick-bass.mp3");
                tom4.play();
                break;
            case "l":
                var tom4 = new Audio("sounds/snare.mp3");
                tom4.play();
                break;
        }// this is for the switch loop
    });// this is for the anonymous function
}// this is for the for loop
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.addEventListener("keydown", function (event) {
        var buttonInnerHTML = event.key;
        buttonAnimation(buttonInnerHTML);
        //   alert("Key was pressed");
        switch (buttonInnerHTML) {
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
                var tom4 = new Audio("sounds/crash.mp3");
                tom4.play();
                break;
            case "k":
                var tom4 = new Audio("sounds/kick-bass.mp3");
                tom4.play();
                break;
            case "l":
                var tom4 = new Audio("sounds/snare.mp3");
                tom4.play();
                break;
        }// this is for the switch loop
    });// this is for the anonymous function
}// this is for the for loop
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.toggle("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100); // 100 milliseconds = 0.1 seconds

}

