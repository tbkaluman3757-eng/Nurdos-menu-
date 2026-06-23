function filterMenu(sectionId) {
  const sections = document.querySelectorAll('.menu-section');
  sections.forEach(section => {
    section.classList.remove('active-section');
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.classList.add('active-section');
  }

  const buttons = document.querySelectorAll('.cat-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active');
  });

  event.currentTarget.classList.add('active');
}