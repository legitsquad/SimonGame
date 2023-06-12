var levelCounter = 1;
var sequence = [];
var wrong = new Audio("sounds/wrong.mp3")
var userInput = [];
let nextLevel
var startGame = false;


$("body").keypress(function (e) {
  $("h1").text("Level " + levelCounter);
  startGame = true;
  sequenceGenerator()
  input()
});



function sequenceGenerator() {
  var x = Math.floor(Math.random() * 4 + 1);

  sequence.push(x);

  $("." + x).fadeIn(500).fadeOut(500).fadeIn(1000);

  levelCounter++
}


function input() {
  for (let i = 1; i <= 4; i++) {
    $("." + i).on("click", function () {
      pressed(i)

      if (nextLevel) {
        switch (i) {
          case 1:
            var audio = new Audio("sounds/green.mp3")
            audio.play()

          case 2:
            var audio = new Audio("sounds/red.mp3")
            audio.play()

          case 3:
            var audio = new Audio("sounds/yellow.mp3")
            audio.play()

          case 4:
            var audio = new Audio("sounds/blue.mp3")
            audio.play()
        }

      }
    });
  }

}


function checkInput() {

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] != userInput[i]) {
      $("h1").text("try Again!");
      nextLevel = false
      wrong.play()
    }
    else {
      nextLevel = true
    }
  }

  if (nextLevel) {
    [
      setTimeout(() => {
        $("h1").text("Level " + levelCounter);
        sequenceGenerator()
        userInput = []
      }, 500)
    ]
  }
}


function pressed(i) {
  $("." + i).addClass("pressed");

  userInput.push(i);

  setTimeout(function () {
    $("." + i).removeClass("pressed");
  }, 200)

  if (userInput.length == sequence.length) {
    checkInput()
  }

  if (userInput[userInput.length - 1] != sequence[userInput.length - 1]) {
    $("h1").text("try Again!");
    wrong.play()
    nextLevel = false
  }
}



