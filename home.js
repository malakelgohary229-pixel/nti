document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector('.track');
    const cards = document.querySelectorAll('.card');
    const prevBtn = document.querySelectorAll('.arrow-btn')[0];
    const nextBtn = document.querySelectorAll('.arrow-btn')[1];
    const dots = document.querySelectorAll('.dot');

    if (!track || cards.length === 0) return;
    let currentIndex = 0;
    function getCardsToShow() {
        if (window.innerWidth <= 480) {
            return 1;
        } else if (window.innerWidth <= 680) {
            return 2;
        }
        return 3;
    }

    function updateSlider() {
        const cardsToShow = getCardsToShow();
        const totalPages = Math.ceil(cards.length / cardsToShow);
        if (currentIndex >= totalPages) {
            currentIndex = totalPages - 1;
        }
        const cardWidth = cards[0].offsetWidth + 20; 
        const moveAmount = currentIndex * cardWidth * cardsToShow;
        track.style.transform = `translateX(-${moveAmount}px)`;

    
        dots.forEach((dot, index) => {
            if (index < totalPages) {
                dot.style.display = 'block';
                dot.classList.toggle('active', index === currentIndex);
            } else {
                dot.style.display = 'none';
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        const cardsToShow = getCardsToShow();
        const totalPages = Math.ceil(cards.length / cardsToShow);
        if (currentIndex < totalPages - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        const cardsToShow = getCardsToShow();
        const totalPages = Math.ceil(cards.length / cardsToShow);
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalPages - 1;
        }
        updateSlider();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    window.addEventListener('resize', updateSlider);
    updateSlider();
});


// responsive menu ---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const closeBtn = document.getElementById("closeBtn");
    const navmenu = document.getElementById("navmenu");

    if (menuToggle && closeBtn && navmenu) {
        menuToggle.addEventListener("click", () => {
            navmenu.classList.add("active");
        });
        closeBtn.addEventListener("click", () => {
            navmenu.classList.remove("active");
        });
    }
});