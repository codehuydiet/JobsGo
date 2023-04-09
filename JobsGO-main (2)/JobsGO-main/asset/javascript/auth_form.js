const submit = document.querySelector('.Btn');
submit.addEventListener("click", CheckEmail);


function CheckEmail() {
    const emailInput = document.getElementById('email-input');
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!emailInput.value.match(regex)) {
        alert('Địa chỉ email không hợp lệ');
        emailInput.focus();
    }
}

const passwordInput = document.getElementById('password-input');
const togglePasswordIcon = document.getElementById('toggle-password-icon');
togglePasswordIcon.addEventListener('click',function(){
    if (passwordInput.type == 'password') {
        passwordInput.type = 'text';
        togglePasswordIcon.classList.remove('fa-eye-slash');
        togglePasswordIcon.classList.add('fa-eye');
      } else {
        passwordInput.type = 'password';
        togglePasswordIcon.classList.remove('fa-eye');
        togglePasswordIcon.classList.add('fa-eye-slash');
      }
});