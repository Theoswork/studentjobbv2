// js/auth.js

// Login functionality
document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent page refresh
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorDiv = document.getElementById("error-message");
  
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      alert(`Välkommen tillbaka, ${userCredential.user.email}`);
      errorDiv.textContent = ""; // Clear any previous errors
      window.location.href = "index.html"; // Redirect to home page
    } catch (error) {
      console.error("Login error:", error.message);
      errorDiv.textContent = error.message; // Show error message
    }
  });
  
  // Sign-up functionality
  document.getElementById("signup-form").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent page refresh
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const errorDiv = document.getElementById("error-message");
  
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      alert(`Konto skapat för ${userCredential.user.email}`);
      errorDiv.textContent = ""; // Clear any previous errors
      window.location.href = "index.html"; // Redirect to home page
    } catch (error) {
      console.error("Sign-up error:", error.message);
      errorDiv.textContent = error.message; // Show error message
    }
  });
  