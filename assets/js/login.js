// Toggle between login and signup forms
document.getElementById('loginToggle').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    this.classList.add('active');
    document.getElementById('signupToggle').classList.remove('active');
});

document.getElementById('signupToggle').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
    this.classList.add('active');
    document.getElementById('loginToggle').classList.remove('active');
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (!email || !password) {
        showAuthPopup('Error', 'Please fill in all fields');
        return;
    }
    
    console.log('Login attempt with:', email, password);
    showAuthPopup('Success', 'You have been logged in successfully');
    this.reset();
});

// Handle signup form submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const firstName = document.getElementById('signupFirstName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    if (!firstName || !email || !password || !confirmPassword) {
        showAuthPopup('Error', 'Please fill in all required fields');
        return;
    }
    
    if (password !== confirmPassword) {
        showAuthPopup('Error', 'Passwords do not match');
        return;
    }
    
    if (password.length < 8) {
        showAuthPopup('Error', 'Password must be at least 8 characters');
        return;
    }
    
    console.log('Signup attempt:', firstName, email, password);
    showAuthPopup('Success', 'Account created successfully!');
    this.reset();
    document.getElementById('loginToggle').click();
});

// Forgot password handler
document.getElementById('forgotPassword').addEventListener('click', function(e) {
    e.preventDefault();
    const email = prompt('Please enter your email address to reset your password:');
    if (email) {
        console.log('Password reset requested for:', email);
        showAuthPopup('Success', 'Password reset link has been sent to your email');
    }
});

// Show modal popup
function showAuthPopup(title, message) {
    document.getElementById('authPopupTitle').textContent = title;
    document.getElementById('authPopupMessage').textContent = message;
    const popup = new bootstrap.Modal(document.getElementById('authPopup'));
    popup.show();
}