window.addEventListener('scroll', function() {
    const header = document.getElementById('fixed-header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(18, 52, 59, 0.8)'; /* Solid color with some transparency */
        header.style.padding = '0px 10px';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; /* Initial transparent background */
        header.style.padding = '10px 20px';
    }
});
