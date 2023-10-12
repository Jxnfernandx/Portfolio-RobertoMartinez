function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('main > div').forEach(section => {
      section.classList.remove('active');
  });

  // Show the selected section
  const selectedSection = document.getElementById(`section${sectionId}`);
  if (selectedSection) {
      selectedSection.classList.add('active');
  }
}

// Different functions for each Section 2 link
function showSection2Content(contentId) {
  const section2 = document.getElementById("section2");
  const blackBoxTheatreContent = document.getElementById('blackBoxTheatreContent');// You can customize these functions to display content for each link
  
  blackBoxTheatreContent.style.display = "none";
  section2.style.display = "none";

  if (contentId === 1) {
   blackBoxTheatreContent.style.display = 'block';
   
  } else if (contentId === 2) {
      // Logic to display content for Observatory
      alert('Displaying content for Observatory');
  } else if (contentId === 3) {
      // Logic to display content for Palliative Care Center
      alert('Displaying content for Palliative Care Center');
  }
  // Add more conditions for other links as needed.
}