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