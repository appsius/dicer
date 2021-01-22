'use strict';

//selecting els
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;

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
    current0El.textContent = currentScore;
  } else {
    //  switch to next player
  }
});
