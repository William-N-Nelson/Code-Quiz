var start = document.getElementById("startBtn")
var q1 = document.getElementById("question1")
var q2 = document.getElementById("question2")
var time = document.getElementById("timer")

var webTimer = 30;

function timer() {
    setTimeout(function() {
        document.getElementById("timer").innerHTML = webTimer;
        webTimer -= 1;
        if (webTimer > 0) {
            timer();
        }
    }, 1000)
}

function startQuiz() {
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("quizStartBody").style.display = "none";
    document.getElementById("question1").style.display = "block";
}

function question2() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
}

function question3() {
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "block";
}

startBtn.addEventListener("click", startQuiz);
q1.addEventListener("click", question2)
q2.addEventListener("click", question3)