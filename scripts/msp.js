const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").innerHTML = `&copy; ${currentYear}`;

const lastModified = document.lastModified;
document.querySelector("#lastmodified").textContent = lastModified;

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('nav');

    if (menuButton && nav) {
        menuButton.addEventListener('click', () => {
            console.log('Menu button clicked');
            menuButton.style.display = 'none'; 
            nav.classList.add('open'); 
        });
    } 
});