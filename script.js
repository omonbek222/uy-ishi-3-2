function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // 'active' klassini qo'shish yoki olib tashlash
}

document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 10% ko'rinishi bilan animatsiya boshlanadi
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // `visible` klassini qo'shish
                observer.unobserve(entry.target); // Kuzatuvni to'xtatish
            }
        });
    }, options);

    boxes.forEach(box => {
        observer.observe(box); // Har bir `box`ni kuzatish
    });
});


function toggleIcons(container) {
    const icons = container.querySelector('.social-icons');
    icons.style.display = icons.style.display === 'block' ? 'none' : 'block';
}