console.log('i am script 2 yeah:)');
var timeLeft = document.querySelector('#time-left');
var startBtn = document.querySelector('.startbtn');
var titleText = document.querySelector('.title');
var titleQuestion = document.querySelector('.title-question');
var btnContainer = document.getElementById('btnContainer');
var correctWrongAlert = document.getElementById('correct-wrong');
var count = 0;
var countEl = document.querySelector('#score-count');
var quizOver = document.querySelector('.quiz-over');

//SECTION create a function to keep track of score
var scoringInProgress = false; //chatgpt helped create this flag
function scoreCount() {
  if (!scoringInProgress) {
    scoringInProgress = true;
    count = count + 3;
    countEl.textContent = count;
  }

  setTimeout(function () {
    scoringInProgress = false; // Reset the flag after the timeout
  }, 1000); // Use the same timeout duration as in your code
}

//SECTION setInterval-------------------------------------
var secondsLeft = 20;
var myInterval;

function setTime() {
  secondsLeft--;
  timeLeft.textContent = secondsLeft + ' seconds left';
  if (secondsLeft <= 0) {
    clearInterval(myInterval);
    clearCorrectWrongMessage();
    endQuiz();
  }
}

//SECTION start Quiz function----------------------
var correctAnswerBtn;
var currentQuestion = 1;
function startQuiz() {
  //hide start button on click
  startBtn.style.display = 'none';
  titleText.textContent = '';
  titleQuestion.textContent = '';
  //start timer here
  myInterval = setInterval(setTime, 1000);
  //show timer
  setTime();
  if (currentQuestion === 1) {
    question1();
  } else if (currentQuestion === 2) {
    question2();
  } else if (currentQuestion === 3) {
    question3();
  } else if (currentQuestion === 4) {
    question4();
  } else if (currentQuestion === 5) {
    question5();
  }
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

var question1 = function () {
  clearCorrectWrongMessage();
  currentQuestion++;

  titleText.textContent =
    '1) Which tag do you use in your HTML link your JavaScript? ';
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
      setTime();
      scoreCount();

      setTimeout(function () {
        if (currentQuestion === 2) {
          question2();
        }
      }, 1000); // Add a short delay before adding the next question's event listener
    } else {
      correctWrongAlert.textContent = 'Wrong!';
      secondsLeft -= 5;
      setTime();
      if (secondsLeft <= 0) {
        return;
      }

      setTimeout(function () {
        if (currentQuestion === 2) {
          question2();
        }
      }, 1000);
    }
  });
};
//SECTION Question 2---------------------
var question2 = function () {
  clearCorrectWrongMessage();
  currentQuestion++;
  //   console.log('this is question2 and should say 3 ' + currentQuestion);

  titleText.textContent = '2) I can declare a variable using: ';
  btnContainer.innerHTML = `
    <button class="answer one">var</button>
    <button class="answer two">let</button>
    <button class="answer three">const</button>
    <button class="answer four">all of the above</button>
    `;

  correctAnswerBtn = btnContainer.querySelector('.four');

  btnContainer.addEventListener('click', function question2ClickHandler(event) {
    clickedBtn = event.target;

    if (clickedBtn === correctAnswerBtn) {
      correctWrongAlert.textContent = 'Correct!';
      secondsLeft += 5;
      setTime();
      //   count += 3;
      scoreCount(); //updates score count

      //   currentQuestion++;

      setTimeout(function () {
        if (currentQuestion === 3) {
          question3();
        }
      }, 1000);
    } else {
      correctWrongAlert.textContent = 'Wrong!';
      secondsLeft -= 5;
      setTime();
      if (secondsLeft <= 0) {
        return;
      }

      //   currentQuestion++;

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
  currentQuestion++;
  //   console.log('this is question3 and should say 4 ' + currentQuestion);
  titleText.textContent = '3) Strict equality checks for: ';
  btnContainer.innerHTML = `
  <button class="answer one">Value</button>
  <button class="answer two">Value and Type</button>
  <button class="answer three">Type</button>
  <button class="answer four">None of the above</button>
 `;

  correctAnswerBtn = btnContainer.querySelector('.two');

  btnContainer.addEventListener('click', function question3ClickHandler(event) {
    clickedBtn = event.target;

    if (clickedBtn === correctAnswerBtn) {
      correctWrongAlert.textContent = 'Correct!';
      secondsLeft += 5;
      //   count += 3;
      scoreCount(); //updates score count
      setTime();

      setTimeout(function () {
        if (currentQuestion === 4) {
          question4();
        }
      }, 1000);
    } else {
      correctWrongAlert.textContent = 'Wrong!';
      secondsLeft -= 5;
      setTime();
      if (secondsLeft <= 0) {
        return;
      }
      //   currentQuestion++;

      setTimeout(function () {
        if (currentQuestion === 4) {
          question4();
        }
      }, 1000);
    }
  });
};

//SECTION Question 4---------------------
var question4 = function () {
  clearCorrectWrongMessage();
  currentQuestion++;
  //   console.log('this is question4 and should say 5 ' + currentQuestion);
  titleText.textContent = '4) What does the JSON.stringify() method do? ';
  btnContainer.innerHTML = `
    <button class="answer one json-btn">Parse JSON string</button>
    <button class="answer b json-btn">Convert a JS object to a JSON string</button>
    <button class="answer three json-btn">Makes string more readable</button>
    <button class="answer four json-btn">Convert a JSON string to a JS object</button>
   `;

  correctAnswerBtn = btnContainer.querySelector('.b');
  btnContainer.addEventListener('click', function question4ClickHandler(event) {
    var clickedBtn = event.target;

    if (clickedBtn === correctAnswerBtn) {
      correctWrongAlert.textContent = 'Correct!';
      secondsLeft += 5;
      setTime();
      //   count += 3;
      scoreCount();

      setTimeout(function () {
        if (currentQuestion === 5) {
          question5();
        }
      }, 1000);
    } else {
      correctWrongAlert.textContent = 'Wrong!';
      secondsLeft -= 5;
      setTime();
      if (secondsLeft <= 0) {
        return;
      }

      setTimeout(function () {
        if (currentQuestion === 5) {
          question5();
        }
      }, 1000);
    }
  });
};

//SECTION Question 5---------------------
var question5 = function () {
  clearCorrectWrongMessage();
  titleText.textContent = '5) What does DOM stand for? ';
  btnContainer.innerHTML = `
    <button class="answer one quiz-over">Document Object Model</button>
    <button class="answer two quiz-over">Data On Modal</button>
    <button class="answer three quiz-over">Design Oriented Model</button>
    <button class="answer four quiz-over">Design Object Model</button>
   `;

  correctAnswerBtn = btnContainer.querySelector('.one');
  btnContainer.addEventListener('click', function question5ClickHandler(event) {
    var clickedBtn = event.target;

    if (clickedBtn === correctAnswerBtn) {
      correctWrongAlert.textContent = 'Correct!';
      secondsLeft += 5;
      setTime();

      scoreCount(); //updates score count

      setTimeout(function () {
        endQuiz();
      }, 1000);
    } else {
      correctWrongAlert.textContent = 'Wrong!';
      secondsLeft -= 5;
      setTime();
      if (secondsLeft <= 0) {
        return;
      }

      setTimeout(function () {
        endQuiz();
      }, 1000);
    }
  });
};

var formEl = (document.getElementById('form').style.display = 'none');
var highScores = [];
var currentUserName = '';
var currentHighScore = 0;

function saveHighScore() {
  var storedHighScores = localStorage.getItem('highScores');
  if (storedHighScores) {
    highScores = JSON.parse(storedHighScores);
  }
}

function updateDisplay() {
  document.querySelector('#name').textContent = currentUserName;
  document.querySelector('#score').textContent = currentHighScore;
}
var endQuiz = function () {
  formEl = document.getElementById('form').style.display = 'block';
  btnContainer.innerHTML = '';
  titleText.textContent = '';
  titleQuestion.textContent = '';
  timeLeft.textContent = '';
  //stop timer here

  titleText.textContent = 'Your final score is: ' + count;
  saveHighScore();
  renderHighScore();
};

var submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', function (event) {
  event.preventDefault();

  var userInitials = document.querySelector('#user-initials');
  currentUserName = userInitials.value;
  currentHighScore = count;

  highScores.push({ userName: currentUserName, highScore: currentHighScore });
  localStorage.setItem('highScores', JSON.stringify(highScores));
  renderHighScore();
  updateDisplay();
  //   localStorage.setItem('user', userName);
  //   localStorage.setItem('score', highScore);
  //   renderHighScore();
});

function renderHighScore() {
  var lastUser = highScores[highScores.length - 1];
  if (!lastUser) {
    return;
  }
  document.querySelector('#name').textContent = lastUser.userName;
  document.querySelector('#score').textContent = lastUser.highScore;
}
// Initial update of the display
updateDisplay();
