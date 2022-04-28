const toogleButton = document.getElementById('toogle-button');
const navList = document.getElementById('navList');

toogleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
});