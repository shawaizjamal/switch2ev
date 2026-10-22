// Wait for the contact form to be submitted
document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get form input values
    const name = document.getElementById("firstName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Get popup elements for displaying messages
    const popupTitle = document.getElementById("popupTitle");
    const popupMessage = document.getElementById("popupMessage");

    // Validate that all required fields are filled
    if (!name || !email || !phone || !message) {
        // Show error message if any field is empty
        popupTitle.textContent = "Error";
        popupMessage.textContent = "Please fill all required fields!";
    } else {
        // Show success message if all fields are filled
        popupTitle.textContent = "Success";
        popupMessage.textContent = "Thank you! We'll contact you soon.";
        // Reset the form after successful submission
        document.getElementById("contactForm").reset();
    }

    // Create and show the Bootstrap modal popup
    const popup = new bootstrap.Modal(document.getElementById("formPopup"));
    popup.show();
});