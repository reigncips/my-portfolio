document.addEventListener('DOMContentLoaded', function() {
    // Get all required elements
    const stars = document.querySelectorAll('.stars i');
    const ratingMessage = document.querySelector('.rating-message');
    const submitBtn = document.getElementById('submitRating');
    let selectedRating = 0;

    // Star rating hover and click effects
    stars.forEach(star => {
        // Hover effect
        star.addEventListener('mouseover', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            updateStars(rating);
            updateMessage(rating);
        });

        // Click effect
        star.addEventListener('click', function() {
            selectedRating = parseInt(this.getAttribute('data-rating'));
            updateStars(selectedRating);
            updateMessage(selectedRating);
        });
    });

    // Reset stars when mouse leaves container
    document.querySelector('.stars').addEventListener('mouseleave', function() {
        updateStars(selectedRating);
        updateMessage(selectedRating);
    });

    // Function to update star appearance
    function updateStars(rating) {
        stars.forEach(star => {
            const starRating = parseInt(star.getAttribute('data-rating'));
            if (starRating <= rating) {
                star.classList.remove('far');
                star.classList.add('fas');
                star.style.color = '#ffd700';
            } else {
                star.classList.remove('fas');
                star.classList.add('far');
                star.style.color = '#ccc';
            }
        });
    }

    // Function to update message
    function updateMessage(rating) {
        const messages = {
            0: 'Click to rate',
            1: 'Poor',
            2: 'Fair',
            3: 'Good',
            4: 'Very Good',
            5: 'Excellent'
        };
        ratingMessage.textContent = messages[rating] || messages[0];
    }

    submitBtn.addEventListener('click', function() {
        if (selectedRating === 0) {
            alert('Please select a rating before submitting');
            return;
        }

        const comment = document.getElementById('comment').value;

        showSuccess();
        resetForm();

    });

    function showSuccess() {
        const success = document.createElement('div');
        success.className = 'rating-success';
        success.textContent = 'Thank you for your rating!';
        document.querySelector('.rating-container').appendChild(success);
        success.style.display = 'block';
        setTimeout(() => success.remove(), 3000);
    }

    function showError() {
        const error = document.createElement('div');
        error.className = 'rating-error';
        error.textContent = 'Something went wrong. Please try again.';
        document.querySelector('.rating-container').appendChild(error);
        error.style.display = 'block';
        setTimeout(() => error.remove(), 3000);
    }

    function resetForm() {
        selectedRating = 0;
        updateStars(0);
        updateMessage(0);
        document.getElementById('comment').value = '';
    }
}); 