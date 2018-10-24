var randomNumber=Math.floor((Math.random()*101));
// console.log(randomNumber);
// console.log(guessField);
// console.log(guessField.type);]
var guesses=document.querySelector('.guesses');
var lastResult=document.querySelector('.lastResult');
var lowOrHi=document.querySelector('.lowOrHi');
var guessSubmit=document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;
guessField.focus();

function  checkGuess()
{
    var userGuess = Number(guessField.value);
    if(guessCount === 1) {
        guesses.textContent = '上次猜的数: ';
      }
      guesses.textContent += userGuess + ' ';
    // console.log(typeof userGuess);
    // console.log(userGuess);
    // guesses.innerHTML+=guessField.value+" ";
    if(userGuess === randomNumber) {
    lastResult.textContent = '恭喜你！猜对了！';
    lastResult.style.backgroundColor = "BlueViolet ";
    lowOrHi.textContent = '';
    
    setGameOver();
} else if(guessCount===10){
    lastResult.textContent='YOUR GAME OVER!!!!!!!';
    lowOrHi.textContent='';
    setGameOver();
} else {
    lastResult.textContent = '你猜错了！';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = '刚才你猜低了！';
    } else if(userGuess > randomNumber) {
        lowOrHi.textContent = '刚才你猜高了！';
    }
  }
guessCount++;
guessField.value = '';
guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = '开始新游戏';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

  function resetGame() {
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultParas p');
    for(var i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
