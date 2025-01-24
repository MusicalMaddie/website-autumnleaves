function showPage(pageId) {
    const pages = document.querySelectorAll('.content');
    pages.forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}
function navigate(page) {
    document.body.style.opacity = 0;
    setTimeout(() => {
        window.location.href = page;
    }, 300);
}
async function loadContent() {
    try {
        // Fetch the JSON content
        const response = await fetch('../content.json');
        const data = await response.json();

        // Populate shared content from 'general'
        const general = data.general;
        document.getElementById('copyright').innerText = general.copyright;

        // Populate page-specific content from 'technology'
        const techComponents = data.technology.components;
        document.getElementById('heading').innerText = techComponents.heading;
        document.getElementById('subheading').innerText = techComponents.subheading;
        document.getElementById('body').innerText = techComponents.body;
    } catch (error) {
        console.error("Error loading content:", error);
    }
}
window.onload = loadContent;
