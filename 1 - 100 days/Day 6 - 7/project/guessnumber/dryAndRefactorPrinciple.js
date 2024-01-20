'use strict';
let secretnumber = Math.trunc(Math.random()*20) + 1
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

    if(!guess) {
        displayMessage('❌ Please Input Number');
    } else if (guess === secretnumber) {
        displayMessage('✨ Correct Number ! ✨');

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.number').textContent = secretnumber;

        if (highscore < score) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


    } else if (guess !== secretnumber) {
        if (score > 1) {
            guess > secretnumber ? displayMessage('"Too High 📈 !!!" '): displayMessage('Too Low 📉 !!!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You Lost The Game 💥 !!!')
            document.querySelector('.score').textContent = 0;
        }
       
    }     
});


document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretnumber = Math.trunc(Math.random()*20) + 1;

    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = null;
    displayMessage('Start Guessing...')
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
});