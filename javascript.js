// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        var target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active section in sidebar based on scroll position
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var sidebarLinks = document.querySelectorAll('.sidebar nav ul li a');

    sections.forEach(function(section) {
        var sectionTop = section.offsetTop - 50;
        var sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            sidebarLinks.forEach(function(link) {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === section.id) {
                    link.classList.add('active');
                }
            });
        }
    });
});
