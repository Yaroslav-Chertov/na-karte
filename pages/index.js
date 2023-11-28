const continents = document.querySelectorAll('.area');
const popupBg = document.querySelector('.popup__bg');
const popup__photo = document.querySelector('.popup__photo');
const popup__title = document.querySelector('.popup__title');
const popup__text = document.querySelector('.popup__text');

continents.forEach((item) => {
    item.addEventListener('click', function () {
        popup__title.textContent = this.getAttribute('data-title');
        popup__photo.setAttribute('src', this.getAttribute('data-photo'));
        popup__text.textContent = this.getAttribute('data-description');
        popupBg.classList.add('active');
    });
});

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
    }
});