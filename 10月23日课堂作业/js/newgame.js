var randomNumber=Math.floor((Math.random()*101));
// console.log(randomNumber);

var guessField=document.querySelector('#guessField');
// console.log(guessField);
// console.log(guessField.type);]
var guesses=document.querySelector('.guesses');
var lastResult=document.querySelector('.lastResult');
var lowOrHi=document.querySelector('lowOrHi');
var guessSubmit=document.querySelector('.guessSubmit');

var guessCount=1;
var resetButton;
guessField.focus();

function  checkGuess(a,b)
{
    guesses.innerHTML+=guessField.value+" ";
    guesses.style.backgroundColor="red";
}
// checkGuess();