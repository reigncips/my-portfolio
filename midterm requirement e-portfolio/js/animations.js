// Scroll reveal
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', reveal);

// Trigger reveal on page load
document.addEventListener('DOMContentLoaded', function() {
    reveal(); // Initial reveal check
    
    // Add stagger indices to cards
    document.querySelectorAll('.course-card').forEach((card, index) => {
        card.style.setProperty('--card-index', index);
    });

    document.querySelectorAll('.hardware-card').forEach((card, index) => {
        card.style.setProperty('--card-index', index);
    });

    document.querySelectorAll('.skill-category').forEach((card, index) => {
        card.style.setProperty('--card-index', index);
    });

    // Add indices to list items
    document.querySelectorAll('.goals-list li').forEach((item, index) => {
        item.style.setProperty('--item-index', index);
    });
});

// Scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.onscroll = function() {
    // Update scroll progress bar
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + "%";
    
    // Also check reveals on scroll
    reveal();
};

// Skill bars animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = `${progress}%`;
    });
}