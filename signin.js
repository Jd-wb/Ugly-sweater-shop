// Mock database of users
const users = [
    { email: "admin@uglysweatershop.com", password: "admin123", role: "admin" },
    { email: "user@uglysweatershop.com", password: "user123", role: "user" }
  ];
  
  // Handle Sign In Form Submission
  document.getElementById('signInForm').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Authenticate user
    const user = users.find(user => user.email === email && user.password === password);
  
    if (user) {
      if (user.role === "admin") {
        alert("Welcome Admin! Redirecting to Admin Dashboard...");
        window.location.href = "admin_dashboard.html"; // Redirect to Admin Dashboard
      } else {
        alert("Welcome User! Redirecting to the shop...");
        window.location.href = "index.html"; // Redirect to regular user home
      }
    } else {
      alert("Invalid email or password. Please try again!");
    }
  });
  