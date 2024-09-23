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
  setupEducationAccordion(); // Initialize the new education accordion
});

const setupAccordion = (id) => {
  const sectionElement = document.getElementById(id);
  const accordionItems = sectionElement.querySelectorAll(".accordion-item");
  const contentDisplay = sectionElement.querySelector(".content-container");

  if (accordionItems.length > 0) {
    const initialItem = accordionItems[0];
    initialItem.classList.add("active");
    contentDisplay.innerHTML = initialItem.querySelector(".accordion-content").innerHTML;
    contentDisplay.style.display = "block";
  }

  accordionItems.forEach(item => {
    item.querySelector(".accordion-header").addEventListener("click", () => {
      accordionItems.forEach(itm => {
        itm.classList.remove("active");
        itm.querySelector(".accordion-content").style.display = "none";
      });
      item.classList.add("active");
      contentDisplay.innerHTML = item.querySelector(".accordion-content").innerHTML;
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

const setupEducationAccordion = () => {
  const educationItems = document.querySelectorAll('#education .education-item');
  
  educationItems.forEach(item => {
    const header = item.querySelector('.education-header');
    const content = item.querySelector('.education-content');
    
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      educationItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.education-content').style.maxHeight = '0';
        }
      });
      
      // Toggle the clicked item
      item.classList.toggle('active');
      
      if (!isActive) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    });
  });
};