var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
// var flashes = 0;
var started = false;
function random_number_generator() {
    var randomNumber = Math.floor(Math.random() * 4);
    // level += 1;
    return randomNumber;
}


$(document).on("keydown", function () {
    if (!started) {
        $("h1").text("level " + level);
        nextSequence()
        started = true;
    }
});// this i copied 

function nextSequence() {
    level++;
    $("h1").text("level " + level);
    var Rnumber = random_number_generator();
    animatePress(buttonColours[Rnumber]);
    gamePattern.push(buttonColours[Rnumber]);
}

$('.btn').on("click", function () {
    userClickedPattern.push($(this).attr("id"));
    // console.log(userClickedPattern);
    // var audio_on_click = new Audio(path_for_sounds);
    // $(this).fadeOut().fadeIn();
    playSound($(this).attr("id"));
    console.log($(this).attr("id"));
    animatePress($(this).attr("id"));
    checkAnswer(userClickedPattern.length - 1);
    // audio_on_click.play();
})
console.log(userClickedPattern);
console.log(gamePattern);
checkAnswer(userClickedPattern.length - 1);// for checking whether the lists are equal or not  ---// this also is copied 

function playSound(name) {
    if (typeof (name) === "number") {
        var path_for_sounds = "sounds/" + buttonColours[name] + ".mp3";
        var audio = new Audio(path_for_sounds);
        audio.play();
    }
    if (typeof (name) === "string") {
        console.log(name);
        var path_for_sounds = "sounds/" + name + ".mp3";
        var audio_on_click = new Audio(path_for_sounds);
        console.log(path_for_sounds);
        audio_on_click.play();
    }
}
function animatePress(currentColour) {
    console.log(currentColour);
    var id = "#" + currentColour;
    $(id).addClass("pressed");
    //     setInterval($(id).classList.toggle("pressed"),100);
    // });
    setTimeout(() => {
        $(id).removeClass("pressed");
    }, 100);
    // console.log($(id));
    // currentColour.addClass("pressed");
}
function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");

        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length) {

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
                nextSequence();
            }, 1000);

        }

    } else {

        console.log("wrong");
        playSound("sounds/wrong.mp3");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }

}
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}











// console.log(randomNumber);
// var audio = new Audio(path_for_sounds);
// audio.play();
// var randomNumber = Math.floor(Math.random() * 4);
// gamePattern.push(buttonColours[randomNumber]);
// $('#' + buttonColours[randomNumber]).fadeOut().fadeIn();

// function nextSequence() {
//     var randomNumber = Math.floor(Math.random() * 4);
//     var path_for_sounds = "sounds/" + buttonColours[randomNumber] + ".mp3";
//     gamePattern.push(randomChosenColour);
//     $('#' + buttonColours[num]).fadeOut().fadeIn();
//     var audio = new Audio(path_for_sounds);
//     audio.play();
// }
// $(document).ready(nextSequence)(100, () => );
// nextSequence()
// var randomChosenColour = buttonColours[nextSequence()];
// var the_final = "#" + randomChosenColour;
// $(the_final).on("click", function() {
//     $('#' + randomChosenColour).fadeOut().fadeIn()
// });
