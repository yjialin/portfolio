document.addEventListener('DOMContentLoaded', function () {
    const slideInElement = document.querySelector('.slide-in');

    const slideInObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in-animation');
            }
        });
    }, { threshold: 0.5 });

    slideInObserver.observe(slideInElement);
});


