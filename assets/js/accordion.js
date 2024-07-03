document.addEventListener("DOMContentLoaded", function () {
    function initializeAccordion(sectionId) {
      const section = document.getElementById(sectionId);
      const items = section.querySelectorAll(".accordeon-item");
      const contentContainer = section.querySelector(".content-container");
  
      if (items.length > 0) {
        const firstItem = items[0];
        firstItem.classList.add("active");
        const firstContent = firstItem.querySelector(".accordeon-content").innerHTML;
        contentContainer.innerHTML = firstContent;
        contentContainer.style.display = "block";
      }
  
      items.forEach((item) => {
        item.querySelector(".accordeon-header").addEventListener("click", function () {
          items.forEach((itm) => {
            itm.classList.remove("active");
            itm.querySelector(".accordeon-content").style.display = "none";
          });
          item.classList.add("active");
          const content = item.querySelector(".accordeon-content").innerHTML;
          contentContainer.innerHTML = content;
          contentContainer.style.display = "block";
        });
      });
    }
  
    // Initialize accordion for all sections
    const sections = ["experience", "education"]; // Add more section IDs as needed
    sections.forEach(sectionId => {
      initializeAccordion(sectionId);
    });
  });
  