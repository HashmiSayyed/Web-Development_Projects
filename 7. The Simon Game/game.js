var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function newSequence() {
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);

    $("#level-title").html("Level " + level);

    level++;
}

$(".btn").click(function() {
    var userChosenColor = this.id;

    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);

    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length);
});

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $('#' + currentColor).removeClass('pressed');
    }, 100);
}

$(document).keypress(function() {
    newSequence();
});

function checkAnswer(currentLevel) {
    if (gamePattern.length === currentLevel) {
        if (JSON.stringify(gamePattern) == JSON.stringify(userClickedPattern)) {
            setTimeout(newSequence, 1000);
            userClickedPattern = [];
        } else {
            var audio = new Audio("sounds/wrong.mp3");
            audio.play();
            $("body").addClass("game-over");
            setTimeout(function() {
                $("body").removeClass('game-over');
            }, 200);

            startOver();
        }
    } else {
        
    }
}

function startOver() {
    $("#level-title").html("Press A Key to Start");
    gamePattern = [];
    userClickedPattern = []
    level = 0;
}