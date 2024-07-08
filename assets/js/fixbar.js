/*!
 * Author: Luiz F. Piochi
 * Website: lupiochi.github.io | linkedin.com/in/luiz-piochi
 * Description: Basic fixed info bar with name + links for my online portfolio.
 */

window.addEventListener('scroll', function() {
    const header = document.getElementById('fixed-header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(18, 52, 59, 0.8)'; /* choose here a solid color (with some transparency so elements remain visible) */
        header.style.padding = '0px 10px';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; /* initial transparent background */
        header.style.padding = '10px 20px';
    }
});
