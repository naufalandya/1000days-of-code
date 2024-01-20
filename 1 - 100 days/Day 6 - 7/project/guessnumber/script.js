'use strict';

/*
console.log(document.querySelector('.message').textContent)

document.querySelector('.message').textContent = "Corret Number ! 🎉 "

document.querySelector('.guess').value = 23;

*/

let secretnumber = Math.trunc(Math.random()*20) + 1

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

    if(!guess) {
        document.querySelector('.message').textContent = "❌ Please Input Number"
    } else if (guess === secretnumber) {
        document.querySelector('.message').textContent = "✨ Correct Number ! ✨";

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.number').textContent = secretnumber;

        if (highscore < score) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


    } else if (guess > secretnumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Too High 📈 !!!";
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You Lost The Game 💥 !!!";
            document.querySelector('.score').textContent = 0;
        }
       
    } else if (guess < secretnumber) {
        document.querySelector('.message').textContent = "Too Low 📉 !!!";
        score = score - 1;
        document.querySelector('.score').textContent = score;
    }
    /*
    document.querySelector('.message').textContent = "Corret Number ! 🎉 " 
    */
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretnumber = Math.trunc(Math.random()*20) + 1;

    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = null;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
});