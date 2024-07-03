// Obtengo el formulario
const loginForm = document.querySelector('.wrapper form');

// Agrego un event listener para el envío del formulario
loginForm.addEventListener('submit', function(event) {
  // Prevengo el comportamiento del envío del formulario
  event.preventDefault();

  // Obtengo los valores de los campos del formulario
  const email = document.querySelector('input[placeholder="Username"]').value;
  const password = document.querySelector('input[type="password"]').value;

  // Valido el correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, ingrese un correo electrónico válido.');
    return;
  }

  // Valido la contraseña
  const passwordRegex = /^.{6,}$/;
  if (!passwordRegex.test(password)) {
    alert('La contraseña debe tener al menos 6 caracteres.');
    return;
  }

  // Si los campos son válidos, puedes enviar el formulario
  loginForm.submit();
});