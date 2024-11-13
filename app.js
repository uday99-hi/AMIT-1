// Handle Registration Form
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('regName').value;
    let email = document.getElementById('regEmail').value;
    let password = document.getElementById('regPassword').value;
    let role = document.getElementById('userRole').value;

    // Save to localStorage (simplified for now)
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    localStorage.setItem('userRole', role);
    
    alert('Registration Successful!');
});

// Handle Login Form
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;
    let role = document.getElementById('loginRole').value;

    // Check if login credentials match
    let savedEmail = localStorage.getItem('userEmail');
    let savedPassword = localStorage.getItem('userPassword');
    let savedRole = localStorage.getItem('userRole');

    if (email === savedEmail && password === savedPassword && role === savedRole) {
        alert(`${role.charAt(0).toUpperCase() + role.slice(1)} Login Successful!`);
        // Redirect to respective dashboards
        if (role === 'parent') {
            window.location.href = "parent-home.html";
        } else if (role === 'driver') {
            window.location.href = "driver-dashboard.html";
        } else if (role === 'admin') {
            window.location.href = "admin-dashboard.html";
        }
    } else {
        alert('Invalid Login');
    }
});
