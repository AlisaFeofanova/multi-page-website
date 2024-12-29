const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('open'); // Анимация бургера
    menu.classList.toggle('open');  // Открытие/закрытие меню
});

