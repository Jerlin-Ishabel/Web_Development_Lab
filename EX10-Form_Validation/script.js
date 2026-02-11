const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    // Username
    if (usernameValue === "") {
        setError(username, "Username is required");
    } else {
        setSuccess(username);
    }

    // Email
    if (emailValue === "") {
        setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email address");
    } else {
        setSuccess(email);
    }

    // Password
    if (passwordValue === "") {
        setError(password, "Password is required");
    } else if (passwordValue.length < 8) {
        setError(password, "Password must be at least 8 characters");
    } else {
        setSuccess(password);
    }

    // Confirm Password
    if (confirmPasswordValue === "") {
        setError(confirmPassword, "Please confirm your password");
    } else if (confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, "Passwords do not match");
    } else {
        setSuccess(confirmPassword);
    }
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const small = inputGroup.querySelector("small");

    inputGroup.className = "input-group error";
    small.innerText = message;
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    inputGroup.className = "input-group success";
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
