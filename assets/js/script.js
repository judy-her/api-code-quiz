console.log('i am connected :)');
var timeLeft = document.querySelector('#time-left');

//SECTION setInterval
var secondsLeft = 20;
var myInterval = setInterval(setTime, 1000);

function setTime() {
  secondsLeft--;
  timeLeft.textContent = secondsLeft + ' seconds left';
  if (secondsLeft === 0) {
    clearInterval(myInterval);
  }
}
setTime();
