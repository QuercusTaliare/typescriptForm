// VARIABLES
var progressBar = document.querySelector('.progressBar');
var form = document.querySelector('.form');
var firstName = document.querySelector('.firstName');
var lastName = document.querySelector('.lastName');
var email = document.querySelector('.email');
var password = document.querySelector('.password');
var passwordRepeat = document.querySelector('.passwordRepeat');
var button = document.querySelector('.button');
var inputs = document.querySelectorAll('.inputs');
var formValues = {};
// FUNCTIONS
// UPDATE PROGRESS function
function updateProgress() {
    var width = 0;
    // const inputsArray: Array<HTMLInputElement> = [...inputs] as any;
    var inputsArray = Array.from(inputs);
    var increment = 100 / inputsArray.length;
    var counter = 0;
    inputsArray.forEach(function (input) {
        if (input.value) {
            width += increment;
            console.log(input.value, width);
            progressBar.style.width = width + "%";
        }
        else if (!input.value) {
            counter++;
        }
        // When the number of empty inputs equals amount of inputs, width is equal to zero
        if (counter === inputsArray.length) {
            progressBar.style.width = 0 + "%";
        }
    });
} // Update Progress function ends
// SUBMIT INFO function
function submitInfo(e) {
    e.preventDefault();
    var elements = e.currentTarget.elements;
    for (var i = 0; i < elements.length; i++) {
        var key = elements[i].name;
        var value = elements[i].value;
        if (key !== "") {
            formValues[key] = value;
        }
    }
} // Submit Info function ends
// Update Progress function runs on page load
updateProgress();
// EVENT LISTENERS
form.addEventListener('submit', submitInfo);
inputs.forEach(function (input) { return input.addEventListener('focusout', updateProgress); });
