document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if (!email || !password) {
        alert('Please fill in both email and password fields.');
        return;
    }
    
    // Simple email format check
    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // If validation passes
    alert('Login successful! (This is a simulation)');
    console.log('Login attempted with:', { email: email, password: '***' });
});
