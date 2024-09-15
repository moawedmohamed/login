document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorSpan = document.getElementById("error");
    const errorSpan2 = document.getElementById("error2");
    const loginButton = document.getElementById("btn");

    // Email validation function
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }

    // Password validation function (You can add specific password requirements here)
    function validatePassword(password) {
        return password.length >= 6; // Minimum 6 characters
    }

    // Form submission handling
    loginButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form from submitting

        const email = emailInput.value;
        const password = passwordInput.value;
        let isValid = true;

        // Clear previous errors
        errorSpan.textContent = "";
        errorSpan2.textContent = "";

        // Validate email
        if (!validateEmail(email)) {
            errorSpan.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        // Validate password
        if (!validatePassword(password)) {
            errorSpan2.textContent = "Password must be at least 6 characters long.";
            isValid = false;
        }

        // If both email and password are valid, proceed with form submission
        if (isValid) {
            // Simulate form submission or handle actual submission via AJAX
            alert("Login successful!");

            // Reset the form after submission
            form.reset();
        }
    });
});
