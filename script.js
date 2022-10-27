const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2')
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
  // using Constraint API
  isValid = form.checkValidity();
  // style main message for an error
  message.textContent = 'Please fill out all fields';
  message.style.color = 'red';
  messageContainer.style.borderColor = 'red';
}

// Submit event
function processFormData(e) {
  e.preventDefault();
  // Validate form
  validateForm();
}

// Event Listener
form.addEventListener('submit', processFormData);