// VARIABLES
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
function updateProgress() {
    // const stuff = Object.values(formValues);
    // inputs.forEach(input => {
    //   if (input !== "") {
    //   }
    // });
    var width;
    var inputsArray = __spreadArrays(inputs);
    var increment = 100 / inputsArray.length;
    console.log(increment);
    inputsArray.forEach(function (input) {
        if (input.value !== "") {
            width += increment;
            progressBar.style.width = 20 + "%";
        }
        else {
            console.log("nope");
        }
    });
}
// Submit the info
// What is the type of an event?
function submitInfo(e) {
    e.preventDefault();
    var elements = e.currentTarget.elements;
    // const formValues = {};
    for (var i = 0; i < elements.length; i++) {
        var key = elements[i].name;
        var value = elements[i].value;
        if (key !== "") {
            formValues[key] = value;
        }
    }
}
// EVENT LISTENERS
form.addEventListener('submit', submitInfo);
inputs.forEach(function (input) { return input.addEventListener('focusout', updateProgress); });
