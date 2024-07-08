/*!
 * Author: Luiz F. Piochi
 * Website: lupiochi.github.io | linkedin.com/in/luiz-piochi
 * Description: This script initializes accordion and tab functionalities for specified sections on a webpage.
 *              The accordion feature allows for expandable and collapsible content sections, while the tabs provide
 *              an interface for switching between different content panels within a section. The script ensures that
 *              only one accordion item is expanded at a time and provides an option to set the first tab as active 
 *              by default.
 * Accordion functionality was inspired from Rand Asswad's website on https://rand-asswad.xyz
 */

document.addEventListener("DOMContentLoaded", () => {
    const sectionIds = ["experience", "education"]; // Extendable for more section IDs
    sectionIds.forEach(id => setupAccordion(id));
  
    setupTabs('education', false); // Initialize education tabs without activating first tab
    setupTabs('skills', true); // Initialize skills tabs with first tab activated
  });
  
  const setupAccordion = (id) => {
    const sectionElement = document.getElementById(id);
    const accordionItems = sectionElement.querySelectorAll(".accordeon-item");
    const contentDisplay = sectionElement.querySelector(".content-container");
  
    if (accordionItems.length > 0) {
      const initialItem = accordionItems[0];
      initialItem.classList.add("active");
      contentDisplay.innerHTML = initialItem.querySelector(".accordeon-content").innerHTML;
      contentDisplay.style.display = "block";
    }
  
    accordionItems.forEach(item => {
      item.querySelector(".accordeon-header").addEventListener("click", () => {
        accordionItems.forEach(itm => {
          itm.classList.remove("active");
          itm.querySelector(".accordeon-content").style.display = "none";
        });
        item.classList.add("active");
        contentDisplay.innerHTML = item.querySelector(".accordeon-content").innerHTML;
        contentDisplay.style.display = "block";
      });
    });
  };
  
  const setupTabs = (id, activateFirst) => {
    const section = document.getElementById(id);
    if (!section) return;
  
    const tabButtons = section.querySelectorAll('.tab-button');
    const tabContents = section.querySelectorAll('.tab-content');
  
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
  
        button.classList.add('active');
        section.querySelector(`#${button.getAttribute('data-tab')}`).classList.add('active');
      });
    });
  
    if (activateFirst && tabButtons.length > 0) {
      tabButtons[0].classList.add('active');
      tabContents[0].classList.add('active');
    }
  };