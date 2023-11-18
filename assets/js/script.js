console.log('i am connected :)');
var timeLeft = document.querySelector('#time-left');
var startBtn = document.querySelector('.startbtn');

//SECTION setInterval-------------------------------------
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

//SECTION add event listener to start quiz-------------------
startBtn.addEventListener('click', function () {
  //run first question here
  alert('you pressed the start quiz button');
});
