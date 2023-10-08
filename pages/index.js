let continents = document.querySelectorAll('.area');
let popupBg = document.querySelector('.popup__bg');
let popup__photo = document.querySelector('.popup__photo');
let popup__title = document.querySelector('.popup__title');
let popup__text = document.querySelector('.popup__text');
let tooltip = document.querySelector('.tooltip');

continents.forEach((item) => {
    item.addEventListener('click', function () {
        popup__title.textContent = this.getAttribute('data-title');
        popup__photo.setAttribute('src', this.getAttribute('data-photo'));
        popup__text.textContent = this.getAttribute('data-description');
        popupBg.classList.add('active');
    });

    item.addEventListener('mouseenter', function () {
        tooltip.textContent = item.getAttribute('data-title');
        tooltip.style.display = 'block';
    });

    item.addEventListener('mouseleave', function () {
        tooltip.textContent = item.getAttribute('data-title');
        tooltip.style.display = 'none';
    });

    item.addEventListener('mousemove', function (e) {
        tooltip.style.top = (e.y + 20) + 'px';
        tooltip.style.left = (e.x + 20) + 'px';
    });
});

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
    }
});