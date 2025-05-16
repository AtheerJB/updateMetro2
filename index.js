window.onload = function() {
    const loggedInEmail = localStorage.getItem('loggedInUserEmail');
    if (loggedInEmail) {
        const user = JSON.parse(localStorage.getItem(loggedInEmail));
        alert("Welcome back, " + user.username);
    }
};

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = JSON.parse(localStorage.getItem(email));
    if (user && user.password === password) {
        alert("Login successful!");
        localStorage.setItem('loggedInUserEmail', email);
        closeAuthModal();
    } else {
        alert("Invalid email or password.");
    }
}

function signup() {
    const username = document.getElementById("newUsername").value;
    const email = document.getElementById("newEmail").value;
    const password = document.getElementById("newPassword").value;
    const phoneNumber = document.getElementById("newPhoneNumber").value;

    if (localStorage.getItem(email)) {
        alert("Email already exists.");
    } else {
        localStorage.setItem(email, JSON.stringify({ username, email, password, phoneNumber }));
        alert("Sign up successful! You can now log in.");
        toggleForms();
    }
}

function closeAuthModal() {
    document.getElementById("authModal").style.display = "none";
}

function toggleForms() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        document.getElementById("modalTitle").innerText = "Log In";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        document.getElementById("modalTitle").innerText = "Sign Up";
    }
}

document.getElementById("loginBtn").onclick = function() {
    document.getElementById("authModal").style.display = "flex";
    showLoginForm();
}

function showLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("authModal")) {
        closeAuthModal();
    }
}

function showFaceIDOptions() {
    const options = confirm("Would you like to set up Face ID? Press 'OK' for yes, 'Cancel' for no.");
    if (options) {
        alert("Face ID set successfully!");
    } else {
        alert("Error! Redirecting to traditional login.");
        document.getElementById("authModal").style.display = "flex";
        showLoginForm();
    }
}