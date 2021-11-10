// 1 start button starts game
// 2 when answer is selected next question is then presented
// 3 wrong answers cut time on the timer
// 4 game ends after the questions or when timers is done
// 5 can save initials and add to high score 
const startButton = document.getElementById('start-btn')
const mainGame = document.getElementById('game-container')


startButton.addEventListener('click', startQuiz);

function startQuiz(){
    console.log("game is started")
    startButton.classList.add('hide');
    mainGame.classList.remove('hide'); 
    startTimer()    
}







function nextQuestion(){

}

function selectAnswer(){

}

//question code

//timer code 
var timerDisplayEl = document.getElementById("timer")

//timer  function
//300s = 5minutes

var startTimer = function(){
    let timerValue = 300
    console.log(timerValue)
    var timerMinusSeconds = function(){
        timerValue --
        console.log(timerValue)
        timerDisplayEl.innerHTML = "seconds left: " + timerValue
        if (timerValue==0){
        clearInterval(timerId)
        }
    }

    const timerId = setInterval(timerMinusSeconds,1000)

    timerExpiration = function(){
        if (timerDisplay == 0)
            console.log("timer should stop")
    }
}


