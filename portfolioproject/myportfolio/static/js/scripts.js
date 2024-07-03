const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill .progreso');
    skills.forEach(skill => {
        skill.style.width = skill.innerText;
    });
});
