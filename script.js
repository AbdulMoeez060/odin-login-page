var confirm = document.querySelector('#confirm-password');

confirm.addEventListener('keyup',checkPassword);
var passVal = false;

function checkPassword(e){
    var pass = document.querySelector('#password');
    var p = document.querySelector("#warning");
    if (pass.value !== e.target.value) {
        p.classList.remove('hide');
        p.classList.add('error');
        passVal = false;

    }
    if (pass.value === e.target.value) {
        p.classList.remove('error');
        p.classList.add('hide');
        passVal = true;

        
    }
}

var password = document.querySelector('#password');
var confirm_pass = document.querySelector('#confirm-password');

// const button = document.getElementById('submit')
// button.disabled = (password.value === confirm_pass.value)

function validate() {
    if(password.value !== confirm_pass.value) {
        confirm_pass.setCustomValidity("Passwords Don't Match");
      }
      else{
        confirm_pass.setCustomValidity("");

      }
  }
password.onchange = validate;
confirm_pass.onkeyup = validate;

function onSub(){
    var p = document.createElement('p');
    p.textContent = 'Form Submitted Refresh to try again';
    var main = document.querySelector('.main');
    main.appendChild(p);
}