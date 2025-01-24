const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.content-section');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and sections
    tabs.forEach(t => t.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));

    // Add active class to the clicked tab and corresponding section
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});
