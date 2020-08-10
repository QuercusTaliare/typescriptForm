// VARIABLES
var form = document.querySelector('.form');
var firstName = document.querySelector('.firstName');
var lastName = document.querySelector('.lastName');
var email = document.querySelector('.email');
var password = document.querySelector('.password');
var passwordRepeat = document.querySelector('.passwordRepeat');
var button = document.querySelector('.button');
// FUNCTIONS
function submitInfo(e) {
    e.preventDefault();
    var elements = e.currentTarget.elements;
    var formValues = {};
    for (var i = 0; i < elements.length; i++) {
        var key = elements[i].name;
        var value = elements[i].value;
        if (key !== "") {
            formValues[key] = value;
        }
    }
    console.log(formValues);
}
// EVENT LISTENERS
form.addEventListener('submit', submitInfo);
