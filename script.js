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

document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.dropdown-link');
        const content = dropdown.querySelector('.dropdown-content');

        link.addEventListener('click', (e) => {
            e.preventDefault();
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.style.display = 'none';
            });
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.style.display = 'none';
            });
        }
    });
});