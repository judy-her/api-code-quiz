console.log('i am connected :)');
var timeLeft = document.querySelector('#time-left');
var startBtn = document.querySelector('.startbtn');
var titleText = document.querySelector('.title');
var titleQuestion = document.querySelector('.title-question');
var btnContainer = document.getElementById('btnContainer');

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
//SECTION function for question 1------------------
var question1 = function () {
  titleText.textContent =
    'Which tag do you use in your HTML link your JavaScript? ';
  btnContainer.innerHTML = `
  <button class="answer one">link</button>
  <button class="answer two">body</button>
  <button class="answer three">script</button>
  <button class="answer four">div</button>
  `;

  var correctAnswerBtn = btnContainer.querySelector('.three');
  btnContainer.addEventListener('click', function (event) {
    var clickedBtn = event.target;

    if (clickedBtn === correctAnswerBtn) {
      alert('Correct!');
    } else {
      alert('Try again');
    }
  });
};

//SECTION add event listener to start quiz-------------------
startBtn.addEventListener('click', function (event) {
  event.preventDefault();
  //hide start button on click
  startBtn.style.display = 'none';
  titleText.textContent = '';
  titleQuestion.textContent = '';
  question1();
});
