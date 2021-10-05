'use strict';

const form = document.querySelector('.cta-form');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const inputs = document.querySelectorAll('.cta-form__input');


// Show error message:
const showError = function(input, message) {
  input.classList.add('error');
  const small = input.nextElementSibling;
  small.style.display = 'flex';
  small.textContent = message;

  if(input === email) input.style.color = '#FF7979';
}

// Show success:
const showSuccess = function(input) {
  input.classList.add('success');
}

// Check email is valid:
const checkEmail = function(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value)) showSuccess(input);
    else if (input.value !== '') showError(input, 'Looks like this is not an email');
}

// Check Required:
const checkRequired = function(inputArr) {
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `${input.placeholder} cannot be empty`)
    } else {
      showSuccess(input)
    }
  })  
}

// Check input length
const checkLength = function(input, min, max) {
  if(!input.value) return; // Guard clause;
  if (input.value.length < min) showError(input, `${input.placeholder} must be a least ${min}`);
    else if (input.value.length > max) showError(input, `${input.placeholder} must be less than ${max}`);
    else showSuccess(input);
}


// EVENT LISTENER:
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkRequired(inputs);
  checkLength(password, 6, 16);
  checkEmail(email);
});


























