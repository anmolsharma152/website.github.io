// Initialize Typed.js
const typed = new Typed('#typed-text', {
    strings: ['Developer', 'Problem Solver', 'Tech Enthusiast', 'Open Source Contributor'],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// Dark mode functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function initDarkMode() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
}

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            if (entry.target.classList.contains('progress-bar')) {
                animateSkillBar(entry.target);
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
});

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        filterProjects(filter);
        updateActiveFilter(button);
    });
});

function filterProjects(filter) {
    projects.forEach(project => {
        const categories = project.dataset.categories.split(',');
        if (filter === 'all' || categories.includes(filter)) {
            project.style.opacity = '1';
            project.style.transform = 'scale(1)';
            project.style.display = 'block';
        } else {
            project.style.opacity = '0';
            project.style.transform = 'scale(0.8)';
            setTimeout(() => {
                project.style.display = 'none';
            }, 300);
        }
    });
}

// Skill bars animation
function animateSkillBar(bar) {
    const percent = bar.getAttribute('data-percent');
    bar.style.width = '0%';
    bar.style.transition = 'width 1.5s ease-in-out';
    requestAnimationFrame(() => {
        bar.style.width = percent + '%';
    });
}

// Form validation and handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (validateForm()) {
        const formData = new FormData(contactForm);
        try {
            const response = await submitForm(formData);
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
        } catch (error) {
            showNotification('Error sending message. Please try again.', 'error');
        }
    }
});

function validateForm() {
    let isValid = true;
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            markInvalid(input, 'This field is required');
            isValid = false;
        } else if (input.type === 'email' && !validateEmail(input.value)) {
            markInvalid(input, 'Please enter a valid email');
            isValid = false;
        }
    });
    return isValid;
}

// Lazy loading for images
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Helper functions
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function markInvalid(input, message) {
    input.classList.add('invalid');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    input.parentNode.appendChild(errorDiv);
    
    input.addEventListener('input', function() {
        input.classList.remove('invalid');
        const error = input.parentNode.querySelector('.error-message');
        if (error) error.remove();
    }, { once: true });
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }, 100);
}

async function submitForm(formData) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData
    });
    if (!response.ok) throw new Error('Failed to send message');
    return response.json();
}

// Initialize
initDarkMode();
