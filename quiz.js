
const Questions = [
    {
        q:"QUES: What is capital of india?",
        a: 
        [{text:"Surat", isCorrect: false},
        {text: "Delhi", isCorrect: true},
        {text: "Gurgoan", isCorrect: false},
        {text: "Mumbai", isCorrect: false}
        ]
    },

    {
        q:"QUES: What is full of HTML?",
        a: 
        [{text:"Hypertext and links markup language", isCorrect: false},
        {text: "High Text Machine Language", isCorrect: false},
        {text: "Hyper Text Machine Language", isCorrect: false},
        {text: "Hyper Text Markup Language", isCorrect: true}
        ]
    },

    {
        q:"QUES: How many heading tags are there in HTML5?",
        a: 
        [{text:"2", isCorrect: false},
        {text: "3", isCorrect: false},
        {text: "6", isCorrect: true},
        {text: "8", isCorrect: false}
        ]
    },
]

let currQuestion = 0;
let score = 0;

function loadQues() {
    const question = document.getElementById('ques');
    const opt = document.getElementById('opt');

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}

loadQues();

function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`

    // if(score==0)
    //     <img src="./Images/lost.jpeg" alt=""/>
    // else if(score==3)
    //     <img src="./Images/win.jpeg" alt=""/>
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}