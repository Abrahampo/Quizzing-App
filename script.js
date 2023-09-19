const question = [
    {
question: "what is the Capital city of Nimba?",
answers: [
    {text: "Fish Town", correct:  false},
    {text: "Sanniquelie", correct:  true},
    {text: "Bensonville", correct:  false},
    {text: "harper", correct:  false},
]

    },
    {
        question: "what is the Capital city of Maryland?",
        answers: [
            {text: "Kakata", correct:  false},
            {text: "Sanniquelie", correct:  false},
            {text: "harper", correct:  true},
            {text: "Kakata", correct:  false},
        ] 
    },

    {
        question: "what is the Capital city  of Montserrado?",
answers: [
    {text: "Kakata", correct:  false},
    {text: "Sanniquelie", correct:  false},
    {text: "Zwedru", correct:  false},
    {text: "Bensonville", correct:  true},
]
    },

    {
        question: "what is the Capital city  of Lofa?",
        answers: [
            {text: "Tubmanburg", correct:  false},
            {text: "Sanniquelie", correct:  false},
            {text: "Voinjama", correct:  true},
            {text: "Bensonville", correct:  false},
        ] 
    },
    {
        question: "what is the Capital city  of Grand cape mount?",
        answers: [
            {text: "Robertsport	", correct:  true},
            {text: "Sanniquelie", correct:  false},
            {text: "Voinjama", correct:  false},
            {text: "Bensonville", correct:  false},
        ]    
    },
    {
        question: "what is the Capital city  of Bong?",
        answers: [
            {text: "Robertsport	", correct:  false},
            {text: "Sanniquelie", correct:  false},
            {text: "Gbarnga", correct:  true},
            {text: "Bensonville", correct:  false},
        ]      
    },
    {
        question: "what is the Capital city  of Gbarpolu?",
        answers: [
            {text: "Robertsport	", correct:  false},
            {text: "Sanniquelie", correct:  false},
            {text: "Bopolu", correct:  true},
            {text: "Bensonville", correct:  false},
        ]        
    },
    {
        question: "what is the Area of Grand Bassa?",
        answers: [
            {text: "159,648", correct:  false},
            {text: "7,932", correct:  true},
            {text: "8,769", correct:  false},
            {text: "3,894	", correct:  false},
        ]       
    },

    {
        question: "what Year liberia was founded?",
        answers: [
            {text: "1822", correct:  true},
            {text: "1231", correct:  false},
            {text: "1916", correct:  false},
            {text: "1828", correct:  false},
        ]         
    },
    {
        question: "Who is the 25th president of Liberia?",
        answers: [
            {text: "Ellen Johnson seleaf", correct:  false},
            {text: "George M Weah", correct:  true},
            {text: "Abraham Poquee", correct:  false},
            {text: "Marwin Diggs", correct:  false},
        ]      
    },

    {
        question: "Who is the 18th president of Liberia?",
        answers: [
            {text: "Ellen Johnson seleaf", correct:  false},
            {text: "George M Weah", correct:  false},
            {text: "Abraham Poquee", correct:  false},
            {text: "Edwin James Barclay ", correct:  true},
        ]    
    },
    {
        question: "Whta is the Favorate food of Liberian?",
        answers: [
            {text: "Rice", correct:  true},
            {text: "corn", correct:  false},
            {text: "Beans", correct:  false},
            {text: "Coconut", correct:  false},
        ]      
    },

    {
        question: "Whta is the total area of Liberia?",
        answers: [
            {text: "123.33km sq", correct:  true},
            {text: "23.33km sq", correct:  false},
            {text: "1224.23km sq", correct:  false},
            {text: "16km sq", correct:  false},
        ]  
    },

    {
        question: "Whta is the currency of  Liberia?",
        answers: [
            {text: "France", correct:  false},
            {text: "Lib dollar", correct:  true},
            {text: "Nara", correct:  false},
            {text: "USD", correct:  false},
        ]   
    },

    {
        question: "Who was the first president of the university of  Liberia?",
        answers: [
            {text: "Benjiman Poquee", correct:  false},
            {text: "George Weah", correct:  false},
            {text: "Prof. Dr. Julius J. S. Nelson Jr.", correct:  true},
            {text: "J.J Robert", correct:  false},
        ]  
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextbutton= document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct
        }
        button.addEventListener("click", selectAnswer);
        
    });
}

function resetState(){
    nextbutton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbutton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${question.length}`;
    nextbutton.innerHTML = "Try Again";
    nextbutton.style.display = "block";
}

function handleNextButten(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();

    }else{
        showScore();
    }
}

nextbutton.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
        handleNextButten();
    }else{
        startQuiz();
    }
});

startQuiz();