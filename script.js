var start = document.getElementById("startBtn")
var q1 = document.getElementById("")

function startQuiz() {
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("quizStartBody").style.display = "none";
    document.getElementById("question1").style.display = "block";
}

startBtn.addEventListener("click", startQuiz);
    