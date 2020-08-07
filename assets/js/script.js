var questionsArr = [
    {
        questions: "What are Sugar Gliders?",
        answers: ["Rodents", "Marsupials", "Felines", "Amphibians"],
        correctIndex: 1
    },

    {
        questions: "What do Sugar Gliders eat?",
        answers: ["Pizza", "Candy", "Fruits, Veggies and Bugs", "Bamboo"],
        correctIndex: 2
    },

    {
        questions: "How many years do sugar gliders live?",
        answers: ["0-5", "5-10", "10-15", "15-20"],
        correctIndex: 2
    },
];

function displayQuestion(i) {
    
    var question = document.getElementById("question");
    question.innerText = questionsArr[i].questions;

    var option1 = document.getElementById("option1");
    option1.innerText = questionsArr[i].answers[0];
    option1.addEventListener("click", function () {
        localStorage.setItem("question1", questionsArr[i].answers[0])
    });
    var option2 = document.getElementById("option2");
    option2.innerText = questionsArr[i].answers[1];
    option2.addEventListener("click", function () {
        localStorage.setItem("question2", questionsArr[i].answers[1])
    });
    var option3 = document.getElementById("option3");
    option3.innerText = questionsArr[i].answers[2];
    option3.addEventListener("click", function () {
        localStorage.setItem("question3", questionsArr[i].answers[2])
    });
    var option4 = document.getElementById("option4");
    option4.innerText = questionsArr[i].answers[3];
    option4.addEventListener("click", function () {
        localStorage.setItem("question4", questionsArr[i].answers[3])
    });
}

displayQuestion(0);