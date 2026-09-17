document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.categories .BUTT');
    const carCards = document.querySelectorAll('.cars .car');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedFilter = button.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            carCards.forEach(car => {
                if (selectedFilter === 'all' || car.classList.contains(selectedFilter)) {
                    car.style.display = 'flex';
                } else {
                    car.style.display = 'none';
                }
            });
        });
    });
});