// VARIABLES

const form: HTMLFormElement = document.querySelector('.form');

const firstName: HTMLInputElement = document.querySelector('.firstName');

const lastName: HTMLInputElement = document.querySelector('.lastName');

const email: HTMLInputElement = document.querySelector('.email');

const password: HTMLInputElement = document.querySelector('.password');

const passwordRepeat: HTMLInputElement = document.querySelector('.passwordRepeat');

const button: HTMLButtonElement = document.querySelector('.button');

// FUNCTIONS

function submitInfo(e) {
  
  e.preventDefault();

  const elements = e.currentTarget.elements;

  const formValues = {};

  for (let i = 0; i < elements.length; i++) {
    const key = elements[i].name;
    const value = elements[i].value;
    if (key !== "") {
      formValues[key] = value;
    } 

  }

  console.log(formValues);

}

// EVENT LISTENERS

form.addEventListener('submit', submitInfo);

