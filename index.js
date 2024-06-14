document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const links = navbar.querySelectorAll('a');
    const sections = document.querySelectorAll('section');

    // Change navbar background color on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#444';
        } else {
            navbar.style.backgroundColor = '#333';
        }

        // Highlight active link based on scroll position
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 60 && rect.bottom >= 60) {
                links.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Smooth scrolling for links
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - navbar.offsetHeight,
                behavior: 'smooth'
            });
        });
    });
});
