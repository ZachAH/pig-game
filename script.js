'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
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

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//function to switch player
const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

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
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        //Swich to next palyer if the active player is 0 then switch to player 1 but if player is one switch to player zero then set score to zero
        switchPlayer();
    }
});

btnHold.addEventListener('click', function() {
    //1.add current score to active players score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore 
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //2.check score is >= 100
    if(scores[activePlayer] >= 20) {
        //finish the game
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
        //switch to the next player
        switchPlayer();

    }

});

//when using query selectors you must use . to select the class getElementById does not need .
        