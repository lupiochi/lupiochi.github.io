// content.js

const contentData = {
    experience: [
        {
            title: "Software Engineer",
            company: "Tech Company",
            duration: "June 2020 - Present",
            description: "Worked on developing web applications with a focus on performance and scalability."
        },
        {
            title: "Junior Developer",
            company: "Startup Inc.",
            duration: "Jan 2018 - May 2020",
            description: "Assisted in the development of client-side scripts and maintained company websites."
        },
        // Add more experiences here
    ],
    certifications: [
        {
            title: "Certified JavaScript Developer",
            institution: "Online Academy",
            date: "March 2021",
            link: "https://example.com/certificate"
        },
        // Add more certifications here
    ],
    publications: [
        {
            title: "Modern Web Development",
            journal: "Tech Journal",
            year: "2022",
            link: "https://example.com/publication"
        },
        // Add more publications here
    ],
    awards: [
        {
            title: "Employee of the Year",
            year: "2021",
            description: "Recognized for outstanding performance and contributions to the team."
        },
        // Add more awards here
    ]
};

function renderContent() {
    // Render Experiences
    const experienceContainer = document.querySelector('#experience .content-container');
    experienceContainer.innerHTML = ''; // Clear existing content
    contentData.experience.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'accordion-item';
        item.innerHTML = `
            <div class="accordion-header">${exp.title}</div>
            <div class="accordion-content">
                <p><strong>${exp.company}</strong></p>
                <p>${exp.duration}</p>
                <p>${exp.description}</p>
            </div>
        `;
        experienceContainer.appendChild(item);
    });

    // Render Certifications
    const certificationsContainer = document.querySelector('#certifications .content-container');
    certificationsContainer.innerHTML = ''; // Clear existing content
    contentData.certifications.forEach(cert => {
        const item = document.createElement('div');
        item.className = 'accordion-item';
        item.innerHTML = `
            <div class="accordion-header">${cert.title}</div>
            <div class="accordion-content">
                <p><strong>${cert.institution}</strong></p>
                <p>${cert.date}</p>
                <p><a href="${cert.link}" target="_blank">View Certificate</a></p>
            </div>
        `;
        certificationsContainer.appendChild(item);
    });

    // Render Publications
    const publicationsContainer = document.querySelector('#publications .content-container');
    publicationsContainer.innerHTML = ''; // Clear existing content
    contentData.publications.forEach(pub => {
        const item = document.createElement('div');
        item.className = 'accordion-item';
        item.innerHTML = `
            <div class="accordion-header">${pub.title}</div>
            <div class="accordion-content">
                <p><strong>${pub.journal}</strong></p>
                <p>${pub.year}</p>
                <p><a href="${pub.link}" target="_blank">Read Publication</a></p>
            </div>
        `;
        publicationsContainer.appendChild(item);
    });

    // Render Awards
    const awardsContainer = document.querySelector('#awards .content-container');
    awardsContainer.innerHTML = ''; // Clear existing content
    contentData.awards.forEach(award => {
        const item = document.createElement('div');
        item.className = 'accordion-item';
        item.innerHTML = `
            <div class="accordion-header">${award.title}</div>
            <div class="accordion-content">
                <p>${award.year}</p>
                <p>${award.description}</p>
            </div>
        `;
        awardsContainer.appendChild(item);
    });

    // Ensure the accordion script is initialized after content injection
    setupAccordion('experience');
    setupAccordion('certifications');
    setupAccordion('publications');
    setupAccordion('awards');
}

document.addEventListener('DOMContentLoaded', function () {
    const contentData = {
        experience: [
            {
                title: "Software Engineer",
                company: "Tech Company",
                duration: "June 2020 - Present",
                description: "Worked on developing web applications with a focus on performance and scalability."
            }
        ]
    };

    const experienceContainer = document.querySelector('#experience .content-container');
    experienceContainer.innerHTML = ''; // Clear existing content

    contentData.experience.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'accordion-item';
        item.innerHTML = `
            <h3>${exp.title}</h3>
            <p><strong>${exp.company}</strong></p>
            <p>${exp.duration}</p>
            <p>${exp.description}</p>
        `;
        experienceContainer.appendChild(item);
    });

    console.log('Content injected:', experienceContainer.innerHTML);
});
