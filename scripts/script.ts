// VARIABLES

const progressBar: any = document.querySelector('.progressBar');

const form: HTMLFormElement = document.querySelector('.form');

const firstName: HTMLInputElement = document.querySelector('.firstName');

const lastName: HTMLInputElement = document.querySelector('.lastName');

const email: HTMLInputElement = document.querySelector('.email');

const password: HTMLInputElement = document.querySelector('.password');

const passwordRepeat: HTMLInputElement = document.querySelector('.passwordRepeat');

const button: HTMLButtonElement = document.querySelector('.button');

const inputs = document.querySelectorAll('.inputs');

const formValues: object = {};

// FUNCTIONS

// UPDATE PROGRESS function
function updateProgress() {

  let width: number = 0;

  // const inputsArray: Array<HTMLInputElement> = [...inputs] as any;
  const inputsArray: Array<HTMLInputElement> = Array.from(inputs);

  const increment: number = 100 / inputsArray.length;

  let counter: number = 0;

  inputsArray.forEach(input => {

    if (input.value) {
      
      width += increment;
      console.log(input.value, width);
      progressBar.style.width = width + "%";

    } else if (!input.value) {
      counter++;
    }

    // When the number of empty inputs equals amount of inputs, width is equal to zero
    if (counter === inputsArray.length) {
      progressBar.style.width = 0 + "%";
    }

  })

  // Submit Button error handling
  if (progressBar.style.width === "100%" && password.value === passwordRepeat.value) {
    button.classList.add('active');
  } else {
    button.classList.remove('active');
  }

} // Update Progress function ends

// SUBMIT INFO function
function submitInfo(e: Event) {
  
  e.preventDefault();

  const elements = e.currentTarget.elements;

  for (let i = 0; i < elements.length; i++) {
    const key = elements[i].name;
    const value = elements[i].value;
    if (key !== "") {
      formValues[key] = value;
    } 

  }

} // Submit Info function ends

// Update Progress function runs on page load
updateProgress();

// EVENT LISTENERS

form.addEventListener('submit', submitInfo);
inputs.forEach(input => input.addEventListener('focusout', updateProgress));

