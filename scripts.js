
// 1 start button starts game
// 2 when answer is selected next question is then presented
// 3 wrong btncut time on the timer
// 4 game ends after the questions or when timers is done
// 5 can save initials and add to high score 



//what needs to be done
// in order of importantce
        // create end game/ high scores screen
        // set if timer reaches 0 end screen
        // set if question index=.length end screen
        // add count function for correct answers 
        // and - time function on timevalue if answer wrong

const startButton = document.getElementById('start-btn')
const mainGame = document.getElementById('game-container')
const gameOverScreen = document.getElementById('gameOverScreen')
var questionElement = document.getElementById('questiontext')
var answerButtonsElement = document.getElementById('answers-btn')
const correctTag = document.getElementById('correctTag')
startButton.addEventListener('click', startQuiz);



const userScore = document.getElementById('yourScore');


let timerValue = 3
let score = 0


function startQuiz(){
    console.log("game is started")
    startButton.classList.add('hide');
    mainGame.classList.remove('hide'); 
    startTimer()   
    score = 0 
    showQuestion()
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
    console.log(timerValue)
    var timerMinusSeconds = function(){
        timerValue --
        
        timerDisplayEl.innerHTML = "seconds left: " + timerValue
        if (timerValue <= 0){
        clearInterval(timerId)
        endOfGameTimer();
        }
    }

    const timerId = setInterval(timerMinusSeconds,1000)  
}
  
/// list
let questionList = [
    {
        question:'What is 2+2?',
            answers: ['10','4', '20', '30'],
            correctAnswer: '4'
    },
    {
        question:'What is 3+3?',
            answers: ['10','20', '30', '6'],
            correctAnswer: '6'
    },
    {
        question:'What is 4+4?',
            answers: ['8','10', '50', '80'],
            correctAnswer: '8'
    },
    {
        question:'What is 5+5?',
            answers: ['25','20', '10', '100'],
            correctAnswer: '10'
    },
    {
        question:'',
            answers: ['','', '', ''],
            correctAnswer: ''
    },
]




let currentQsIndex = 0;
////hide questions when done 


var endOfGameTimer = function(){
        mainGame.classList.add('hide');
        gameOverScreen.classList.remove('hide')
        gameOverScreen.classList.add('gameOverScreen')
}


var endOfGameIndex = function(){
    if (currentQsIndex == 4){
        mainGame.classList.add('hide');
        gameOverScreen.classList.remove('hide')
        gameOverScreen.classList.add('gameOverScreen')
        
    }
}

/////////// function check answer 

/////
function showQuestion () {
    var currentQs = questionList[currentQsIndex]
    console.log("the current question index is " + currentQsIndex)
    questionElement.innerText = currentQs.question;
    answerButtonsElement.innerHTML = '';
    currentQs.answers.forEach(answer => {
    const button = document.createElement('button')
    button.textContent = answer;
    button.classList.add('btn')
    button.addEventListener('click', checkAnswer)
    answerButtonsElement.appendChild(button)
})
}


function checkAnswer(event){

    var currentQ = questionList[currentQsIndex];

    
    if  (currentQ && currentQ.correctAnswer === event.target.textContent) {

        // alert('correct')
        score += 10;
    } else {
        // alert('incorrect')
        //  add time - time condition here (I think)
        score -=5;
        timerValue = timerValue - 10
        /// time working 
      
    }
    console.log(score);
    console.log(currentQsIndex)
    currentQsIndex++
    if(currentQsIndex === questionList.length){
        endGame();
    } else {
        showQuestion();
        localStorage.setItem('score', score);
    }


    userScore.textContent ="Your score for the quiz was " + score;
    endOfGameIndex();
}


var clearStorage = function(){
    Storage.clear()
}

//////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////

// var score = 30

// let userInput = document.getElementById('userInput');
// let submitBtn = document.getElementById('submitBtn');

// // submitBtn.addEventListener('click', getInfo);

// var getInfo = function () {
//  userInfo = userInput.value
// }






