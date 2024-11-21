function openImageViewer(img) {
    console.log('Click detected');
    console.log('Image source:', img.src);
    const viewer = document.getElementById("imageViewer");
    const expandedImg = document.getElementById("expandedImg");
    
    // Set up the viewer
    viewer.style.display = "flex";
    expandedImg.src = img.src;
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
    
    // Add fade-in effect
    viewer.style.opacity = "0";
    setTimeout(() => {
        viewer.style.opacity = "1";
    }, 10);
}

function closeImageViewer() {
    const viewer = document.getElementById("imageViewer");
    const expandedImg = document.getElementById("expandedImg");
    
    // Add fade-out effect
    viewer.style.opacity = "0";
    
    setTimeout(() => {
        viewer.style.display = "none";
        // Reset image transform
        expandedImg.style.transform = "scale(1)";
        // Re-enable scrolling
        document.body.style.overflow = "auto";
    }, 300);
}

// Close viewer when clicking outside the image
document.addEventListener('DOMContentLoaded', function() {
    const viewer = document.getElementById("imageViewer");
    const expandedImg = document.getElementById("expandedImg");
    
    viewer.addEventListener('click', function(e) {
        if (e.target === viewer) {
            closeImageViewer();
        }
    });

    // Add escape key support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeImageViewer();
        }
    });
    
    // Prevent image click from closing the viewer
    expandedImg.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

// Scroll reveal
window.addEventListener('scroll', reveal);

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

// Skill bars animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = `${progress}%`;
    });
}

// Scroll progress
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector(".scroll-progress").style.width = scrolled + "%";
};
