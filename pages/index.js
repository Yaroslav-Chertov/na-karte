const tooltip = document.querySelector('.tooltip');
const areas = document.querySelectorAll('.area');

areas.forEach(area => {
    area.addEventListener('mousemove', function (e) {
        tooltip.innerText = this.dataset.title;
        tooltip.style.top = (e.y + 20) + 'px';
        tooltip.style.left = (e.x + 20) + 'px';
    });

    area.addEventListener('mouseenter', function () {
        tooltip.style.display = 'block';
    });

    area.addEventListener('mouseleave', function () {
        tooltip.style.display = 'none';
    });
});