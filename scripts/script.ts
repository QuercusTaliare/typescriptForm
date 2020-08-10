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


function updateProgress() {

  // const stuff = Object.values(formValues);

  // inputs.forEach(input => {
  //   if (input !== "") {

  //   }
  // });

  let width: number;

  const inputsArray = [...inputs];

  const increment = 100 / inputsArray.length;

  console.log(increment);

  inputsArray.forEach(input => {
    if (input.value !== "") {
      width += increment;
      progressBar.style.width = 20 + "%";


    } else {
      console.log("nope")
    }
  })

}

// Submit the info
// What is the type of an event?
function submitInfo(e: any) {
  
  e.preventDefault();

  const elements = e.currentTarget.elements;

  // const formValues = {};

  for (let i = 0; i < elements.length; i++) {
    const key = elements[i].name;
    const value = elements[i].value;
    if (key !== "") {
      formValues[key] = value;
    } 

  }

}

// EVENT LISTENERS

form.addEventListener('submit', submitInfo);
inputs.forEach(input => input.addEventListener('focusout', updateProgress));

