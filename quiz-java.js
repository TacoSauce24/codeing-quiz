var answer1 = document.getElementById('btn1');
var answer2 = document.getElementById('btn2');
var answer3 = document.getElementById('btn3');
var answer4 = document.getElementById('btn4');
var timerEl = document.getElementById('timer');
var clickBtn = document.getElementById('start-btn');
var questionEl = document.getElementById('question');
var qzBtns = document.getElementById('answer-buttons');
var questionBox = document.getElementById('question')
var timeleft = 60;
score = 0;
questionNumber = 0;
questionIndex = 0;

const questionsTable = [
    { question : "Commonly used data types DO NOT include:",
    answers :[
        {text: 'strings', correct : false },
        {text: 'booleans', correct : false },
        {text: 'alert', correct : true },
        {text: 'numbers', correct : false },
    ]
    },

    { question: "Arrays in JS can be used to store",
    answers :[
        {text: 'Numbers and strings', correct : false },
        {text: 'Other arrays', correct : false },
        {text: 'Booleans', correct : false },
        {text: 'All of the above', correct : true },
    ]
    },

    { question: "The condition in an if / else statement is enclosed within ____." ,
    answers :[
        {text: 'Quotes', correct : false },
        {text: 'Curly brackets', correct : false },
        {text: 'Parentheses', correct : true },
        {text: 'Square Brackets', correct : false },
    ]
    },

    { question: "String values must be enclosed within ___ when being assigned to variables.",
    answers :[
        {text: 'Commas', correct : false },
        {text: 'Curly brackets', correct : false },
        {text: 'Quotes', correct : true },
        {text: 'Parentheses', correct : false },
    ]
    },

    { question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers :[
        {text: 'Javascript', correct : false },
        {text: 'terminal / bash', correct : false },
        {text: 'for loops', correct : false },
        {text: 'console.log', correct : true },
    ]
    }
];

qzBtns.style.display = 'none'
questionBox.style.display = 'none'

clickBtn.addEventListener("click",function countdown() {
   qzBtns.style.display = '';
   clickBtn.style.display = 'none';
   questionBox.style.display = '';
    var timeInterval = setInterval(function(){
        if (timeleft>-1){
            timerEl.textContent = timeleft
            timeleft--;
            StartDisplayingQuestions()
            
            
        } 
        else{(timeleft === -2) 
            clearInterval(timeInterval);
           alert('time is up please try again.')
           
        }
    },1000);
})
 





function StartDisplayingQuestions() {
    let qst = questionsTable[questionNumber];
    let questNo = questionNumber + 1
    questionEl.textContent = questNo +'.' + qst.question;
    answer1.textContent = answer1;
    answer2.textContent = qst.answer2;
    answer3.textContent = qst.answer3;
    answer4.textContent = qst.answer4;
}
// make an index to relate the buttons to the answer.
qst.answers.forEach(answers => {
    const button = document.createElement('button');
    button.textContent = answers.text;
    button.classList.add('btn')
    qzBtns.appendChild(button);
});