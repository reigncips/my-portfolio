function scrollCourses(direction) {
    const container = document.querySelector('.coursework-grid');
    const scrollAmount = 400; // Adjust this value based on your card width + gap
    
    if (direction === 'left') {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
    
    // Update button visibility after scroll
    setTimeout(updateScrollButtons, 100);
}

function updateScrollButtons() {
    const container = document.querySelector('.coursework-grid');
    const leftBtn = document.querySelector('.scroll-btn.left');
    const rightBtn = document.querySelector('.scroll-btn.right');
    
    // Show/hide left button
    if (container.scrollLeft <= 0) {
        leftBtn.classList.add('hidden');
    } else {
        leftBtn.classList.remove('hidden');
    }
    
    // Show/hide right button
    if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
        rightBtn.classList.add('hidden');
    } else {
        rightBtn.classList.remove('hidden');
    }
}

// Initialize button visibility
document.addEventListener('DOMContentLoaded', function() {
    updateScrollButtons();
    
    // Update on scroll
    const container = document.querySelector('.coursework-grid');
    container.addEventListener('scroll', updateScrollButtons);
}); 