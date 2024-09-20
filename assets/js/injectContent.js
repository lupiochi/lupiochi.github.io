document.addEventListener("DOMContentLoaded", () => {
  fetch('content.json')
    .then(response => response.json())
    .then(data => {
      injectExperienceContent(data.experience);
      injectPublicationsContent(data.publications);
      injectCertificationsContent(data.certifications);
      injectAwardsContent(data.awards);
      setupAccordion('experience');
    })
    .catch(error => console.error('Error loading content:', error));
});

function injectExperienceContent(experienceData) {
  const experienceContainer = document.querySelector('#experience .experience-container .accordion-items');
  
  experienceData.forEach(exp => {
    const accordionItem = document.createElement('div');
    accordionItem.className = 'accordion-item';

    const header = document.createElement('h3');
    header.className = 'accordion-header';
    header.textContent = exp.header;

    const content = document.createElement('div');
    content.className = 'accordion-content';

    const position = document.createElement('p');
    position.innerHTML = `<strong>Position:</strong> ${exp.position}`;

    const time = document.createElement('p');
    time.innerHTML = `<strong>Time:</strong> ${exp.time}`;

    const place = document.createElement('p');
    place.innerHTML = `<strong>Place:</strong> ${parseLinks(exp.place)}</p>`;

    const description = document.createElement('div');
    description.className = 'description';
    exp.description.forEach(desc => {
      const p = document.createElement('p');
      p.innerHTML = `- ${parseLinks(desc)}`;
      description.appendChild(p);
    });
    
    content.appendChild(position);
    content.appendChild(time);
    content.appendChild(place);
    content.appendChild(description);

    accordionItem.appendChild(header);
    accordionItem.appendChild(content);
    experienceContainer.appendChild(accordionItem);
  });
}

function parseLinks(text) {
  return text.replace(/\[\[(.*?)\|(.*?)\]\]/g, '<a href="$2" target="_blank">$1</a>');
}

function injectPublicationsContent(publicationsData) {
  const publicationsContainer = document.querySelector('#publications .publications-container .publications-list');
  
  publicationsData.forEach(pub => {
    const listItem = document.createElement('li');
    listItem.className = 'publication-item';

    listItem.innerHTML = `
      <p>
        <strong>${pub.title}</strong><br>
        ${pub.details}<br>
        <a href="${pub.link}" target="_blank">View Online</a>
      </p>
    `;

    publicationsContainer.appendChild(listItem);
  });
}

function injectCertificationsContent(certificationsData) {
  const certificationsContainer = document.querySelector('#certifications .certifications-container');
  
  certificationsData.forEach(cert => {
    const certCard = document.createElement('div');
    certCard.className = 'certification-card';

    certCard.innerHTML = `
      <span class="icon solid fa-clipboard"></span>
      <h3>${cert.name}</h3>
      <p><strong>Issuing Organization:</strong> ${cert.organization}</p>
      <p><strong>Date:</strong> ${cert.date}</p>
      <a href="${cert.link}" target="_blank">View Certificate</a>
    `;

    certificationsContainer.appendChild(certCard);
  });
}

function injectAwardsContent(awardsData) {
  const awardsContainer = document.querySelector('#awards .awards-container');
  
  awardsData.forEach(award => {
    const awardItem = document.createElement('div');
    awardItem.className = 'award-item';

    awardItem.innerHTML = `
      <h3>${award.title}</h3>
      <p>${award.description}</p>
    `;

    awardsContainer.appendChild(awardItem);
  });
}
