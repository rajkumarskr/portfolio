document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    // Example of interactivity - show a message when a skill is clicked
    const skills = document.querySelectorAll('#skillsList li');
    skills.forEach(skill => {
        skill.addEventListener('click', function() {
            alert('You clicked on ' + this.textContent + '!');
        });
    });
});

function toggleDescription(descId) {
    const desc = document.getElementById(descId);
    const arrow = document.querySelector(`[data-id="${descId}"]`);

    // Toggle description visibility
    desc.style.display = desc.style.display === "none" ? "block" : "none";
    
    // Toggle arrow rotation
    arrow.classList.toggle('rotate-arrow');
}