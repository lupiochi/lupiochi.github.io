document.addEventListener("DOMContentLoaded", function () {
    // Initialize accordion for all sections
    const sections = ["experience", "education"]; // Add more section IDs as needed
    sections.forEach(sectionId => {
        initializeAccordion(sectionId);
    });

    // Initialize tabs for education section without setting the first tab as active
    initializeTabs('education', false);

    // Initialize tabs for skills section with setting the first tab as active
    initializeTabs('skills', true);
});

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

function initializeTabs(sectionId, setActive) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const tabButtons = section.querySelectorAll('.tab-button');
    const tabContents = section.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked button and the corresponding content
            button.classList.add('active');
            section.querySelector('#' + button.getAttribute('data-tab')).classList.add('active');
        });
    });

    // Set the first tab as active by default if setActive is true
    if (setActive && tabButtons.length > 0) {
        tabButtons[0].classList.add('active');
        tabContents[0].classList.add('active');
    }
}
