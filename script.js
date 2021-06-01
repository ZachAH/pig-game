'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
    //1. generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. display dice
    diceEl.classList.remove('hidden');
    //using template literal to display dice block 
    diceEl.src = `dice-${dice}.png`;
    
    //3. check for rolled 1: if true, switch to next player
    if(dice !== 1) {
        //Add dice to current score if not 1
        currentScore = currentScore + dice;
        current0El.textContent = currentScore; //  CHANGE LATER
    } else {
        //Swich to next palyer
    }
});