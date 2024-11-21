<div class="contact-form-container">
    <?php if (isset($_GET['status'])): ?>
        <div class="message-status <?php echo $_GET['status']; ?>">
            <?php 
                if ($_GET['status'] === 'success') {
                    echo "Message sent successfully!";
                } else {
                    echo "Failed to send message. Please try again.";
                }
            ?>
        </div>
    <?php endif; ?>

    <form action="send.php" method="post" class="contact-form">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
        </div>

        <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" required></textarea>
        </div>

        <button type="submit" class="submit-btn">Send Message</button>
    </form>
</div> 