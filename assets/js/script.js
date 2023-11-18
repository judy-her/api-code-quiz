console.log('i am connected :)');
var timeLeft = document.querySelector('#time-left');
var startBtn = document.querySelector('.startbtn');
var titleText = document.querySelector('.title');
var titleQuestion = document.querySelector('.title-question');
var question1 = document.querySelector('.question');

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
startBtn.addEventListener('click', function (event) {
  event.preventDefault();
  //run first question here
  titleText.textContent = '';
  titleQuestion.textContent = '';
  //hide start button on click
  startBtn.style.display = 'none';
});
//SECTION make function for start button
var question1 = function () {
  titleText.textContent = question1;
};
