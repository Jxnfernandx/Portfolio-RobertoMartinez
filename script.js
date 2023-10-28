const SECTIONS = ['blackBoxTheatreContent', 'observatoryContent', 'pallativeCareCenterContent', 'renders', 'revolveTerraChapel', 'sketches'];

function showSection(event, sectionId) {
  event.preventDefault();
  // Hide all sections
  document.querySelectorAll('main > div').forEach(section => {
    section.classList.remove('active');
    section.style.display = 'none'; // Add this line
  });

  // Show the selected section
  const selectedSection = document.getElementById(`section${sectionId}`);
  if (selectedSection) {
    selectedSection.classList.add('active');
    selectedSection.style.display = 'block'; // Add this line

    // If it's section 2, show the list and hide the content
    if (sectionId === 2) {
      const list = document.querySelector('#section2 ul');
      if (list) {
        list.style.display = 'block';
      }

      SECTIONS.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          element.style.display = 'none';
        }
      });
    }
  }
}

function showSection2Content(contentId) {
  // Hide all content
  SECTIONS.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = 'none';
    }
  });

  // Hide the list in section 2
  const list = document.querySelector('#section2 ul');
  if (list) {
    list.style.display = 'none';
  }

  // Show the selected content
  const selectedContent = SECTIONS[contentId - 1];
  if (selectedContent) {
    const element = document.getElementById(selectedContent);
    if (element) {
      element.style.display = 'block';
    }
  }
}



