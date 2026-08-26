"use strict";

console.log('Добро пожаловать на FRONT_END!');

// ========== ПРИМЕР РАБОТЫ С DOM ==========
// Находим все ссылки на странице
const allLinks = document.querySelectorAll('a');
console.log(`📎 На странице найдено ${allLinks.length} ссылок`);

// Находим блок с особенностями
const featuresSection = document.querySelector('#features');
if (featuresSection) {
    console.log('Блок "Что ты изучишь" найден!');
}

// ========== ПЛАВНАЯ ПРОКРУТКА ДЛЯ ЯКОРНЫХ ССЫЛОК ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('Сайт загружен и готов к работе!');