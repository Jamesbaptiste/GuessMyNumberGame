'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉 Correct number!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guss is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? '📈 You guessed too high, try again!!'
          : '📉 You guessed too low, try again!!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '😭 You lost the game';
    }

    //   //When guess is too high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent =
    //       '📈 You guessed too high, try again!!';
    //     score = score - 1;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.score').textContent = 0;
    //     document.querySelector('.message').textContent = '😭 You lost the game';
    //   }
    //   //When guess is too low
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent =
    //       '📉 You guessed too low, try again!!';
    //     score = score - 1;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.score').textContent = 0;
    //     document.querySelector('.message').textContent = '😭 You lost the game';
    //   }
    // }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  console.log(secretNumber);
});
