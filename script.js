const numberGenerator = () => Math.trunc(Math.random() * 20) + 1;
const displayHiddenNumber = function(message){
    document.querySelector('.number').textContent = message;
}
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
const displayScore = function(message){
    document.querySelector('.score').textContent = message;
}
const displayHighestScore = function(message){
    document.querySelector('.highscore').textContent = message;
}
const setNumberWidth = function(widthValue){
    document.querySelector('.number').style.width = widthValue;
}

let hiddenNumber = numberGenerator();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        displayMessage("Not a number");
    }
    else if(guess === hiddenNumber){
            displayHiddenNumber(hiddenNumber);
        displayMessage("Hurraiee you won!!");
        document.querySelector('body').style.backgroundColor = "#60b347";
        setNumberWidth("30rem");


        if(score > highscore){
        highscore = score ;
        displayHighestScore(highscore);
        }
    }
    else if(guess !== hiddenNumber && score > 1){
            
        displayMessage(guess > hiddenNumber?"Too High!" : "Too Low");
            score--;
            displayScore(score);
        }
    
    });

    document.querySelector('.again').addEventListener('click', function (){
        score = 20;
        displayScore(score);
        setNumberWidth("15rem");
        hiddenNumber = numberGenerator();
        displayMessage("Start guessing...");
        document.querySelector('.number').textContent = "?";
        document.querySelector('.guess').value = " ";
        document.querySelector('body').style.backgroundColor = "#222";
    })