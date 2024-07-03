const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correct: "Paris"
  },
  // Add more questions as needed
];

let currentQuestionIndex = 0;

function loadQuestion() {
  const questionContainer = document.getElementById('quiz-container');
  questionContainer.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${questions[currentQuestionIndex].question}</h5>
        ${questions[currentQuestionIndex].answers.map((answer, index) => `
          <div class="form-check">
            <input class="form-check-input" type="radio" name="answer" id="answer${index}" value="${answer}">
            <label class="form-check-label" for="answer${index}">${answer}</label>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

document.getElementById('next-btn').addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    document.getElementById('next-btn').classList.add('d-none');
    document.getElementById('submit-btn').classList.remove('d-none');
  }
});

loadQuestion();



document.getElementById('feedback-form').addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get form elements
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validation flags
  let isValid = true;

  // Validate name
  if (name === '') {
      alert('Name is required.');
      isValid = false;
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
      alert('Email is required.');
      isValid = false;
  } else if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      isValid = false;
  }

  // Validate subject
  if (subject === '') {
      alert('Subject is required.');
      isValid = false;
  }

  // Validate message
  if (message === '') {
      alert('Message is required.');
      isValid = false;
  }

  // If all fields are valid, submit the form
  if (isValid) {
      alert('Form submitted successfully!');
      // You can uncomment the line below to actually submit the form
      // this.submit();
  }
});




document.getElementById('submit-btn').addEventListener('click', () => {
  let score = 0;
  questions.forEach((question, index) => {
    const selectedAnswer = document.querySelector(`input[name="answer"]:checked`).value;
    if (selectedAnswer === question.correct) {
      score++;
    }
  });
  document.querySelector('.modal-body').innerHTML = `You scored ${score} out of ${questions.length}`;
  $('#resultModal').modal('show');
});
