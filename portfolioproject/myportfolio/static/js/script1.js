/*=================================== toggle icon navbar ===================================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*=================================== scroll section active link===================================*/

let sections = document.querySelector('sections');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });

    /*=================================== sticky navbar ===================================*/
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*=================================== remove toggle icon and navbar===================================*/

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');


};

/*=================================== remove toggle icon and navbar===================================*/

ScrollReveal({
    distance: '80px',
    duration: 200,
    delay: 200,
});

ScrollReveal().reveal('.inicio-content, heading', { origin: 'top' });
ScrollReveal().reveal('.inicio-img, .servicios-container, .portafolio-box, .contactos form', { origin: 'buttom'});
ScrollReveal().reveal('.inicio-contactos h1, .sobremi-img', { origin:'left'});
ScrollReveal().reveal('.inicio-contactos p, .sobremi-content', { origin: 'right' });


/*=================================== typed js ===================================*/

const typed = new Typed('.multiple-text', {
    strings: ['Desarrolladora de páginas web', 'Desarrolladora de Software'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});


// Obtengo el formulario
const form = document.querySelector('#contacto form');

// Agrego un event listener para el envío del formulario
form.addEventListener('submit', function(event) {
  // Prevengo el comportamiento del envío del formulario
  event.preventDefault();

  // Obtengo los valores de los campos del formulario
  const nombre = document.querySelector('input[placeholder="Nombre Completo"]').value;
  const email = document.querySelector('input[placeholder="Correo Electrónico"]').value;
  const telefono = document.querySelector('input[placeholder="Número de teléfono"]').value;
  const asunto = document.querySelector('input[placeholder="Asunto"]').value;
  const mensaje = document.querySelector('textarea').value;

  // Validaciones
  let isValid = true;

  // Validar nombre completo (al menos 3 palabras)
  const nombrePartes = nombre.trim().split(' ');
  if (nombrePartes.length < 3) {
    alert('Por favor, ingrese su nombre completo con al menos 3 palabras.');
    isValid = false;
  }

  // Validar correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, ingrese un correo electrónico válido.');
    isValid = false;
  }

  // Validar número de teléfono (9 dígitos)
  const telefonoRegex = /^\d{9}$/;
  if (!telefonoRegex.test(telefono)) {
    alert('Por favor, ingrese un número de teléfono válido de 9 dígitos.');
    isValid = false;
  }

  // Validar asunto (al menos una palabra)
  if (asunto.trim().length === 0) {
    alert('Por favor, ingrese un asunto.');
    isValid = false;
  }

  // Validar mensaje (al menos una palabra)
  if (mensaje.trim().length === 0) {
    alert('Por favor, ingrese un mensaje.');
    isValid = false;
  }

  if (isValid) {
    // Si los campos son válidos, puedes enviar el formulario
    form.submit();
  }
});