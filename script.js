'use strict';

// selecting els
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const setValue = function (className, resetVal) {
  document.getElementById(
    `${className}--${activePlayer}`
  ).textContent = resetVal;
};

const switchPlayers = function () {
  currentScore = 0;
  activePlayer = activePlayer === 1 ? 0 : 1;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    //generate random number
    const dice = Math.trunc(Math.random() * 6) + 1;

    // display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // check if number is 1
    if (dice !== 1) {
      // add number to current score
      currentScore += dice;
      setValue('current', currentScore);
    } else {
      // switch to next player
      setValue('current', 0);
      switchPlayers();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // add current score to active player score
    scores[activePlayer] += currentScore;
    setValue('score', scores[activePlayer]);

    // check if a.p. score is above 100
    if (scores[activePlayer] >= 100) {
      // declare winner
      playing = false;

      let winnerPlayer = document.querySelector(`.player--${activePlayer}`);
      winnerPlayer.classList.add('player--winner');
      winnerPlayer.classList.remove('player--active');

      diceEl.classList.add('hidden');

      setValue('current', 0);
    } else {
      // switch players
      setValue('current', 0);
      switchPlayers();
    }
  }
});

btnNew.addEventListener('click', function () {
  playing = true;

  currentScore = 0;
  setValue('current', 0);

  scores = [0, 0];
  setValue('score', scores[activePlayer]);

  score0El.textContent = 0;
  score1El.textContent = 0;

  let winnerPlayer = document.querySelector(`.player--${activePlayer}`);
  activePlayer = 0;
  winnerPlayer.classList.remove('player--winner');
  winnerPlayer.classList.add('player--active');

  diceEl.classList.add('hidden');
});
