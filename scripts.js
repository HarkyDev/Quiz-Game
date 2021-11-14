//*LIST OF VARIABLES*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const startButton = document.getElementById('start-btn')
const mainGame = document.getElementById('game-container')
const gameOverScreen = document.getElementById('gameOverScreen')
var questionElement = document.getElementById('questiontext')
var answerButtonsElement = document.getElementById('answers-btn')
const correctTag = document.getElementById('correctTag')
const userScore = document.getElementById('yourScore');
let timerValue = 60
let score = 0

//*QUESTION LIST*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let questionList = [
    {
        question:'"js" is short hand for what?',
        answers: ['JavaScript','JavaStandard', 'Jason Statham', 'JudoScipt'],
        correctAnswer: 'JavaScript'
    },
    {
        question:'In JavaScript what is the fancy name for a list?',
        answers: ['Collection','Array', 'Collective', 'Ajoin'],
        correctAnswer: 'Array'
    },
    {
        question:'Which of these does not define anything?',
        answers: ['Var','Const', 'Let', 'Digi'],
        correctAnswer: 'Digi'
    },
    {
        question:'Who designed JavaScript?',
        answers: ['Brendan Eich','Brendan Fraser', 'Brendan Gleeson', 'Chuck Liddell'],
        correctAnswer: 'Brendan Eich'
    },
    {
        question:'',
        answers: ['','', '', ''],
        correctAnswer: ''
    },
]

let currentQsIndex = 0;
//*START QUIZ FUNCTION*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

startButton.addEventListener('click', startQuiz);
function startQuiz(){
    console.log("game is started")
    startButton.classList.add('hide');
    mainGame.classList.remove('hide'); 
    startTimer()   
    score = 0 
    showQuestion()
}

//*TIMER FUNCTION*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var timerDisplayEl = document.getElementById("timer")

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

//*END GAME CONDITIONS*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//*ANSWER VALIDATION + SHOW QUESTIONS*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//Eoin Harkin ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
