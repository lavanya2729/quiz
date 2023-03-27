const quizData = [{
        question: "Which of the following is a client siteWhich was not one of Voldemort's Horcruxes?", 
        a: "Harry",
        b: "Nagini",
        c: "Helga's Diadem",
        d: "Tom Riddle's Diary",
        correct: "c",
    },
    {
        question: "Which of these are not one of Hagrid's many pets?",
        a: "Grawp",
        b: "Fluffy",
        c: "Aragog",
        d: "Noberta",
        correct: "a",
    },
    {
        question: "Which class did Severus Snape always want to teach?",
        a: "Potions",
        b: "charms",
        c: "Defense Against Dark Arts",
        d: "Transfiguration",
        correct: "c",
    },
    {
        question: "Which Hogwarts house did Moaning Myrtle belong in?",
        a: "Gryffindor",
        b: "Slytherin",
        c: "Ravenclaw",
        d: "Hufflepuff",
        correct: "c",
    },
     {
        question: "What class did Neville end up teaching at Hogwarts?",
        a: "Astronomy",
        b: "Herbology",
        c: "Charms",
        d: "Muggle Studies",
        correct: "b",
    }
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
  allInputs[3].nextElementSibling.innerText = data.d
  // allInputs[4].nextElementSibling.innerText = data.e

}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `
}
loadQuestion(index);
