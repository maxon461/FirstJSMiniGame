'use strict';

const updateHighScore = function () {
  if (score > highscore) {
    highscore = score;
  }
};

const restartGame = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.guess').value = '';
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when no number
  if (!guess) {
    document.querySelector('.message').textContent = `No number !`;
  }
  //When score = 0
  else if (score === 0) {
    document.querySelector('.message').textContent = `U lose , score =  0`;
    document.querySelector('body').style.backgroundColor = '#c20909';
  }
  //when player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `Correct number!`;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    updateHighScore(highscore, score);
    console.log(highscore);
    document.querySelector('.highscore').textContent = highscore;
  }
  //when to high
  else if (guess > secretNumber) {
    document.querySelector('.message').textContent = `Too high!`;
    score--;
    document.querySelector('.score').textContent = score;
  }
  //when too low
  else if (guess < secretNumber) {
    document.querySelector('.message').textContent = `Too low!`;
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  restartGame();
});
