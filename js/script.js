// Menu
const burger = document.querySelector('.burger-open');
const menu = document.querySelector('.mobile-menu');

burger.addEventListener('click', function () {
    menu.classList.toggle('open');
});

// Tabs-1

const btns = document.querySelectorAll('.starship__link');
const about = document.querySelector('.tabs');
const articles = document.querySelectorAll('.starship-rocket');

about.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    if (id) {
        btns.forEach(function (btn) {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });

        articles.forEach(function (article) {
            article.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});