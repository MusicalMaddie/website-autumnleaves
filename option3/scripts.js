const certificationsContainer = document.getElementById('certifications');
const certificationsPath = '../content/certifications/';

// Generate filenames dynamically in a loop for both png and jpeg files
for (let i = 1; i <= 22; i++) { // Adjust 10 to the maximum number of certifications
    ["png", "jpeg"].forEach(ext => {
        const img = document.createElement('img');
        img.src = `${certificationsPath}certification${i}.${ext}`;
        img.alt = `Certification ${i}`;

        img.onerror = function() {
            this.style.display = 'none'; // Hide the image if it doesn't exist
        };

        certificationsContainer.appendChild(img);
    });
}
