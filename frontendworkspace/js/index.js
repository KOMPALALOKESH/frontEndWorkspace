let loginForm = document.getElementsByTagName('login');
let signUpForm = document.getElementsByTagName('signup');
let close = document.getElementsByTagName('close');

function close() {
    loginForm[0].classList.add('hide');
    signUpForm[0].classList.add('hide');
}

function showLogin() {
    loginForm[0].classList.remove('hide');
}

function showRegister() {
    signUpForm[0].classList.remove('hide');
}