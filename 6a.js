let buttonReset = document.getElementById('reset');

buttonReset.addEventListener('click', function () {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  localStorage.removeItem('score');

  updateScoreElement();
});

let score = JSON.parse(localStorage.getItem('score')) ||
{
  wins: 0,
  losses: 0,
  ties: 0
};
updateScoreElement();

let result = '';


function playGame(playerMove) {
  const computerMove = pickComputerMove();
  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    }
    else if (computerMove === 'paper') {
      result = 'You lose.';
    }
    else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    }
    else if (computerMove === 'paper') {
      result = 'Tie.';
    }
    else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
  }

  else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    }
    else if (computerMove === 'paper') {
      result = 'You win.';
    }
    else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  }
  else if (result === 'You lose.') {
    score.losses += 1;
  }
  else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = `${result}`;

  document.querySelector('.js-moves').innerHTML = `You
  <img src = "${playerMove}-emoji.png" class = "move-icon">
  <img src = "${computerMove}-emoji.png" class = "move-icon">
  Computer`;

}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}



function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  }
  else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  return computerMove;
}


let rockButton = document.getElementById('rock');
rockButton.addEventListener('click', () => {
  playGame('rock');
});
let paperButton = document.getElementById('paper');
paperButton.addEventListener('click', () => {
  playGame('paper');
});
let scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', () => {
  playGame('scissors');
});


