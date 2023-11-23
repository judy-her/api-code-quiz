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

//SECTION start Quiz function----------------------
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
}

//SECTION add event listener to start quiz-------------------
startBtn.addEventListener('click', function (event) {
  event.preventDefault();
  startQuiz();
});
//SECTION add a function to clear 'correct' or 'wrong' before each question
function clearCorrectWrongMessage() {
  correctWrongAlert.textContent = '';
}

//SECTION function for question 1------------------
//NOTE Xpert learning ai helped with current question variable to keep track of current question
var correctAnswerBtn;
var currentQuestion = 1;

var question1 = function () {
  clearCorrectWrongMessage();

  titleText.textContent =
    'Which tag do you use in your HTML link your JavaScript? ';
  btnContainer.innerHTML = `
    <button class="answer one">link</button>
    <button class="answer two">body</button>
    <button class="answer three">script</button>
    <button class="answer four">div</button>
  `;

  correctAnswerBtn = btnContainer.querySelector('.three');

  btnContainer.addEventListener('click', function question1ClickHandler(event) {
    var clickedBtn = event.target;

    if (clickedBtn === correctAnswerBtn) {
      correctWrongAlert.textContent = 'Correct!';
      secondsLeft += 5;
      count += 3;
      scoreCount(); // updates score count
      // xpert ai helped with this
      currentQuestion++;

      setTimeout(function () {
        if (currentQuestion === 2) {
          question2();
        } else if (currentQuestion === 3) {
          question3();
        }
      }, 1000); // Add a short delay before adding the next question's event listener
    } else {
      correctWrongAlert.textContent = 'Wrong!';
      secondsLeft -= 5;
      currentQuestion++;

      setTimeout(function () {
        if (currentQuestion === 2) {
          question2();
        } else if (currentQuestion === 3) {
          question3();
        }
      }, 1000); // Add a short delay before adding the next question's event listener
    }
  });
};

//NOTE MY ORIGINAL QUESTION 1 FUNCTION
// var question1 = function () {
//   titleText.textContent =
//     'Which tag do you use in your HTML link your JavaScript? ';
//   btnContainer.innerHTML = `
//   <button class="answer one">link</button>
//   <button class="answer two">body</button>
//   <button class="answer three">script</button>
//   <button class="answer four">div</button>
//   `;

//   correctAnswerBtn = btnContainer.querySelector('.three');
//   btnContainer.addEventListener('click', function (event) {
//     var clickedBtn = event.target;

//     if (clickedBtn === correctAnswerBtn) {
//       correctWrongAlert.textContent = 'Correct!';
//       secondsLeft += 5;
//       count += 3;
//       scoreCount(); //updates score count
//       //xpert ai helped with this
//       currentQuestion++;
//       if (currentQuestion === 2) {
//         question2();
//       } else if (currentQuestion === 3) {
//         question3();
//       }
//     } else {
//       correctWrongAlert.textContent = 'Wrong!';
//       secondsLeft -= 5;
//       currentQuestion++;
//       if (currentQuestion === 2) {
//         question2();
//       } else if (currentQuestion === 3) {
//         question3();
//       }
//     }
//   });
// };

//SECTION Question 2---------------------
var question2 = function () {
  clearCorrectWrongMessage();
  titleText.textContent = 'I can declare a variable using: ';
  btnContainer.innerHTML = `
  <button class="answer one">var</button>
  <button class="answer two">let</button>
  <button class="answer three">const</button>
  <button class="answer four">all of the above</button>
  `;

  correctAnswerBtn = btnContainer.querySelector('.four');

  btnContainer.addEventListener('click', function question2ClickHandler(event) {
    var clickedBtn = event.target;

    if (clickedBtn === correctAnswerBtn) {
      correctWrongAlert.textContent = 'Correct!';
      secondsLeft += 5;
      count += 3;
      scoreCount(); //updates score count
      currentQuestion++;

      setTimeout(function () {
        if (currentQuestion === 3) {
          question3();
        }
      }, 1000);
    } else {
      correctWrongAlert.textContent = 'Wrong!';
      secondsLeft -= 5;
      currentQuestion++;
      setTimeout(function () {
        if (currentQuestion === 3) {
          question3();
        }
      }, 1000);
    }
  });
};
//SECTION Question 3---------------------
var question3 = function () {
  clearCorrectWrongMessage();
  titleText.textContent = 'Strict equality checks for: ';
  btnContainer.innerHTML = `
  <button class="answer one">Value</button>
  <button class="answer two">Value and Type</button>
  <button class="answer three">Type</button>
  <button class="answer four">none of the above</button>
  `;

  correctAnswerBtn = btnContainer.querySelector('.two');
  btnContainer.addEventListener('click', function (event) {
    var clickedBtn = event.target;

    if (clickedBtn === correctAnswerBtn) {
      correctWrongAlert.textContent = 'Correct!';
      secondsLeft += 5;
      count += 3;
      scoreCount(); //updates score count
    } else {
      correctWrongAlert.textContent = 'Wrong!';
      secondsLeft -= 5;
    }
  });
};
