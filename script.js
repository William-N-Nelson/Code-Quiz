var start = document.getElementById("startBtn")
var q1 = document.getElementById("question1")
var q2 = document.getElementById("question2")
var q3 = document.getElementById("question3")
var time = document.getElementById("timer")

var q1clickedtrue = false
var q2clickedtrue = false
var q3clickedtrue = false



var webTimer = 30;

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
    
    if (q1clickedtrue == true && q2clickedtrue == true && q3clickedtrue == true){
        document.getElementById("finalScore").innerHTML = "You scored 3/3!";
    
    } else if (q1clickedtrue == true && q2clickedtrue == true || q1clickedtrue == true && q3clickedtrue || q2clickedtrue == true && q3clickedtrue ) {
        document.getElementById("finalScore").innerHTML = "You scored 2/3";
    } else if (q1clickedtrue == true || q2clickedtrue == true || q3clickedtrue == true) {
        document.getElementById("finalScore").innerHTML = "You scored 1/3.";
    } else {
        document.getElementById("finalScore").innerHTML = "You scored 0/3...";
    }
    
    

    document.getElementById("quizEndBody").style.display = "block";
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

document.getElementById('q1true').addEventListener("click",function() {
    question2();
    q1clickedtrue = true 
    return q1clickedtrue;
});
document.getElementById('q2true').addEventListener("click",function() {
    question2();
    q2clickedtrue = true;
    return q2clickedtrue;
});
document.getElementById('q3true').addEventListener("click",function() {
    question2();
    q3clickedtrue = true 
    return q3clickedtrue;
});

startBtn.addEventListener("click", startQuiz);
q1.addEventListener("click", question2)
q2.addEventListener("click", question3)
q3.addEventListener("click", endQuiz)

/* document.getElementById("q1false")  */
/*
document.getElementById('button').addEventListener("click", function() {
   clicked = true
}​);​ 
*/