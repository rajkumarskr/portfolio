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


// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const status = document.getElementById('formStatus');
    const button = form.querySelector('button[type="submit"]');
    const originalButtonText = button.innerHTML;
    
    try {
        button.innerHTML = 'Sending...';
        button.disabled = true;
        
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            status.className = 'success';
            status.innerHTML = 'Message sent successfully!';
            form.reset();
        } else {
            status.className = 'error';
            status.innerHTML = 'Oops! There was a problem sending your message.';
        }
    } catch (error) {
        status.className = 'error';
        status.innerHTML = 'Oops! There was a problem sending your message.';
    } finally {
        button.innerHTML = originalButtonText;
        button.disabled = false;
        setTimeout(() => status.style.display = 'none', 5000);
    }
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    const phoneInput = document.getElementById('phone');
    const fullNumber = '+91' + phoneInput.value;
    phoneInput.value = fullNumber; // Combine values before submission
});

// Optional: Auto-format input
document.getElementById('phone').addEventListener('input', function(e) {
    this.value = this.value.replace(/\D/g,'').substring(0,10);
});


// Add this to your existing script
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuOpen = document.getElementById('mobile-menu-open');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const menu = document.getElementById('menu');

    mobileMenuOpen.addEventListener('click', () => {
        menu.classList.add('mobile-active');
        mobileMenuOpen.style.display = 'none';
        mobileMenuClose.style.display = 'block';
    });

    mobileMenuClose.addEventListener('click', () => {
        menu.classList.remove('mobile-active');
        mobileMenuOpen.style.display = 'block';
        mobileMenuClose.style.display = 'none';
    });
});