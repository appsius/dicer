'use strict';

//selecting els
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

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const resetValue = function (resetVal) {
  document.getElementById(`current--${activePlayer}`).textContent = resetVal;
};

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Rolling dice
btnRoll.addEventListener('click', function () {
  //generate random number
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //  check if number is 1
  if (dice !== 1) {
    //add number to current score
    currentScore += dice;
    resetValue(currentScore);
  } else {
    //  switch to next player
    currentScore = 0;
    resetValue(0);
    activePlayer = activePlayer === 1 ? 0 : 1;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
