var start = document.getElementById("startBtn")
var q1 = document.getElementById("question1")
var q2 = document.getElementById("question2")
var q3 = document.getElementById("question3")
var time = document.getElementById("timer")
var showMe = document.getElementById("showHighscore")
var saveMe = document.getElementById("saveStuff")
/*
var saveScore = document.getElementById("finalScore")
*/
var initialsListSpan = document.querySelector("#finalInit");
var scoreListSpan = document.querySelector("#finalScore");


var qTrue = 0
var wrongTimeDeduct = false;
var webTimer = 30;

function saveAll() {
    var initials = document.querySelector("finalInit");
    var saveScore = document.querySelector("finalScore");
    
    localStorage.setItem("finalInit", initials);
    localStorage.setItem("finalScore", saveScore);
    console.log(saveScore);
    recallAll()
}
function recallAll() {
    var initials = localStorage.getItem("finalInit");
    var saveScore = localStorage.getItem("finalScore");

    initials = initials;
    saveScore = saveScore;
}

function timer() {
    setTimeout(function() {
        document.getElementById("timer").innerHTML = "Time Remaining: " + webTimer;
        webTimer -= 1;
        if (webTimer >= 0) {
            timer(); 
        } else {
            endQuiz(); 
        }
    }, 1000)
}

function endQuiz() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "none";
    document.getElementById("timer").style.display = "none";
    
    setTimeout(function() {
        if (qTrue == 3){
            document.getElementById("finalScore").innerHTML = "You scored 3/3!";
        
        } else if (qTrue == 2) {
            document.getElementById("finalScore").innerHTML = "You scored 2/3";
        } else if (qTrue == 1) {
            document.getElementById("finalScore").innerHTML = "You scored 1/3.";
        } else {
            document.getElementById("finalScore").innerHTML = "You scored 0/3...";
        }
    }, 100)
    
    document.getElementById("quizEndBody").style.display = "block";
}

function startQuiz() {
    document.getElementById("highscore").style.display = "none";
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("quizStartBody").style.display = "none";
    document.getElementById("question1").style.display = "block";
    document.getElementById("timer").style.display = "block";
}
function question2() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";

    wrongTimeDeduct = true;
    return wrongTimeDeduct;
}
function question3() {
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "block";
}

document.addEventListener("click", function(event) {
    if (event.target.matches(".false")) {
        webTimer -= 5;
    }
})
document.addEventListener("click", function(event) {
    if (event.target.matches(".true")) {
        qTrue += 1
        console.log("question hello")
    }
})

startBtn.addEventListener("click", startQuiz);
q1.addEventListener("click", question2)
q2.addEventListener("click", question3)
q3.addEventListener("click", endQuiz)
saveMe.addEventListener("click", saveAll)