/*!
 * Author: Luiz F. Piochi
 * Website: lupiochi.github.io | linkedin.com/in/luiz-piochi
 * Description: Vanilla JavaScript for slide animation for my online portfolio.
 * 
 * Inspiration from Bruno Vieira's article (June 2020) on https://dev.to/bmsvieira/vanilla-js-slidedown-up-4dkn
 */

const slideUpElement = (elem) => {
  const originalHeight = elem.scrollHeight;
  const currentTransition = elem.style.transition;
  elem.style.transition = '';

  requestAnimationFrame(() => {
    elem.style.height = originalHeight + 'px';
    elem.style.transition = currentTransition;

    requestAnimationFrame(() => {
      elem.style.height = '0';
    });
  });
};

const slideDownElement = (elem) => {
  const contentHeight = elem.scrollHeight;
  elem.style.height = contentHeight + 'px';

  elem.addEventListener('transitionend', () => {
    elem.style.height = '';
  }, { once: true });
};

document.querySelectorAll(".accordion").forEach(accordion => {
  accordion.querySelectorAll(".accordion-item").forEach(item => {
    item.addEventListener('click', () => {
      const contentElement = item.querySelector(".accordion-content");

      if (item.classList.contains("active")) {
        slideUpElement(contentElement);
        item.classList.remove("active");
      } else {
        const currentlyActiveItem = accordion.querySelector(".accordion-item.active");
        if (currentlyActiveItem) {
          slideUpElement(currentlyActiveItem.querySelector(".accordion-content"));
          currentlyActiveItem.classList.remove("active");
        }
        slideDownElement(contentElement);
        item.classList.add("active");
      }
    });

    item.querySelector(".accordion-content").style.height = '0';
  });
});

document.querySelectorAll('ul.collapsible li').forEach(listItem => {
  listItem.addEventListener('click', (e) => {
    e.stopPropagation();
    if (listItem.querySelector('ul')) {
      listItem.classList.toggle('active');
    }
  });
});
