const switchToggle = document.getElementById('switch');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

switchToggle.addEventListener('change', () => {
  if (switchToggle.checked) {
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
  } else {
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
  }
});
