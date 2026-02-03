const menu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

document.getElementById('menuBtn').onclick = () => {
    menu.classList.add('open');
    overlay.style.display = 'block';
};

document.getElementById('closeMenu').onclick = () => {
    menu.classList.remove('open');
    overlay.style.display = 'none';
};

overlay.onclick = () => {
    menu.classList.remove('open');
    overlay.style.display = 'none';
};
