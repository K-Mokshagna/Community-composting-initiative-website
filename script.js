// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Dark Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '10px';
toggleButton.style.right = '10px';
toggleButton.style.padding = '10px';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';
toggleButton.style.backgroundColor = '#4CAF50'; // Green color
toggleButton.style.color = 'white';

document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Toggle Light Mode';
    } else {
        toggleButton.textContent = 'Toggle Dark Mode';
    }
});

// Simple Form Validation for Contact Form
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill out all fields.');
        } else {
            alert('Thank you for your message!');
        }
    });
}

// Add Dark Mode Styles
const style = document.createElement('style');
style.innerHTML = `
    .dark-mode {
        background-color: #333;
        color: white;
    }
    .dark-mode nav {
        background-color: #444;
    }
    .dark-mode footer {
        background-color: #444;
    }
    .dark-mode article {
        background-color: #555;
    }
`;
document.head.appendChild(style);

// Add Animation on Scroll
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
});

animatedElements.forEach(element => {
    observer.observe(element);
});