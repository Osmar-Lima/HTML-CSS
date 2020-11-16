var email = document.getElementById('email');
var senha = document.getElementById('password');

email.addEventListener('focus', ()=>{
    email.style.borderColor = "#4a5f6a";
});

email.addEventListener('blur', ()=>{
    email.style.borderColor = "#CCC";
});

password.addEventListener('focus', ()=>{
    password.style.borderColor = "#4a5f6a";
});

password.addEventListener('blur', ()=>{
    password.style.borderColor = "#CCC";
});