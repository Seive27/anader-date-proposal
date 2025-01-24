let step = 1;

const question = document.getElementById('question');
const buttons = document.getElementById('buttons');
const response = document.getElementById('response');
const imageContainer = document.getElementById('image-container');
const gifContainer = document.getElementById('gif-container');  // Reference to the GIF container

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

btn1.addEventListener('click', handleYes);
btn2.addEventListener('click', handleNo);

function handleYes() {
  if (step === 1) {
    // Hide the GIF after the first interaction
    gifContainer.style.display = 'none';

    question.textContent = 'How about February 13?';
    btn1.textContent = 'Yes';
    btn2.textContent = 'Maybe';
    createButton('No');
    step = 2;
  } else if (step === 2) {
    displayResponse(
      'okayy looking forward to it!! sankyaaa',
      'happy chi-awaw.jpg'
    );
  } else if (step === 3) {
    displayResponse(
      'okayy looking forward to it!! sankyaaa',
      'happy chi-awaw.jpg'
    );
  }
}

function handleNo() {
  if (step === 1) {
    btn2.textContent = 'Yes';
  } else if (step === 2) {
    question.textContent = 'Or February 11 perhaps?';
    btn2.textContent = 'Yes';
    buttons.querySelector('button:nth-child(3)').textContent = 'No';
    step = 3;
  } else if (step === 3) {
    displayResponse(
      'awww:( it\'s okay we can do it next time',
      'sad chi-awaw.jpg'
    );
  }
}

function createButton(text) {
  const btn3 = document.createElement('button');
  btn3.textContent = text;
  btn3.className = 'pink-button';
  btn3.addEventListener('click', () => {
    displayResponse(
      'awww:( it\'s okay we can do it next time',
      'sad chi-awaw.jpg'
    );
  });
  buttons.appendChild(btn3);
}

function displayResponse(message, imagePath) {
  question.style.display = 'none';
  buttons.style.display = 'none';
  response.textContent = message;

  const img = document.createElement('img');
  img.src = imagePath;
  imageContainer.innerHTML = '';
  imageContainer.appendChild(img);
}

// Redirect for the second "Yes" button in "Or February 11 perhaps?"
buttons.querySelector('button:nth-child(2)').addEventListener('click', () => {
  displayResponse(
    'okayy looking forward to it!! sankyaaa',
    'happy chi-awaw.jpg'
  );
});

// Redirect for the "Maybe" button to go back to the "Or February 11 perhaps?" part
buttons.querySelector('button:nth-child(3)').addEventListener('click', () => {
  question.textContent = 'Or February 11 perhaps?';
  btn2.textContent = 'Yes';
  buttons.querySelector('button:nth-child(3)').textContent = 'No';
  step = 3;
});
