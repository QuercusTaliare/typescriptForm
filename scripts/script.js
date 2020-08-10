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
    var increment = 0;
    // const inputsArray: Array<HTMLInputElement> = [...inputs] as any;
    var inputsArray = Array.from(inputs);
    inputsArray.forEach(function (input) {
        if (input.value) {
            increment = 100 / inputsArray.length;
            width += increment;
            console.log(width);
            progressBar.style.width = width + "%";
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
// EVENT LISTENERS
form.addEventListener('submit', submitInfo);
inputs.forEach(function (input) { return input.addEventListener('focusout', updateProgress); });
