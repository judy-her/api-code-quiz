console.log('i am connected :)');
var timeLeft = document.querySelector('#time-left');
var startBtn = document.querySelector('.startbtn');
var titleText = document.querySelector('.title');
var titleQuestion = document.querySelector('.title-question');
var btnContainer = document.getElementById('btnContainer');
var correctWrongAlert = document.getElementById('correct-wrong');
var count = 0;
var countEl = document.querySelector('#score-count');

//SECTION create a function to keep track of score
function scoreCount() {
  countEl.textContent = count;
}

//SECTION setInterval-------------------------------------
var secondsLeft = 20;
var myInterval;

function setTime() {
  secondsLeft--;
  timeLeft.textContent = secondsLeft + ' seconds left';
  if (secondsLeft === 0) {
    clearInterval(myInterval);
  }
}

//SECTION start Quiz function
function startQuiz() {
  //hide start button on click
  startBtn.style.display = 'none';
  titleText.textContent = '';
  titleQuestion.textContent = '';
  //start timer here
  myInterval = setInterval(setTime, 1000);
  //show timer
  setTime();
  //call question1 here
  question1();
  //start score count here
  // scoreCount();
}

//SECTION add event listener to start quiz-------------------
startBtn.addEventListener('click', function (event) {
  event.preventDefault();
  startQuiz();
});

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
      correctWrongAlert.textContent = 'Correct!';
      secondsLeft += 5;
      count = count + 3;
      scoreCount(); //updates score count
    } else {
      correctWrongAlert.textContent = 'Wrong!';
      secondsLeft -= 5;
    }
  });
};
//SECTION NOTE WORK ON question 2 function, think about it
