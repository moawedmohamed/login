document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const text = document.getElementById("text");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const errorSpan = document.getElementById("error");
  const errorSpan2 = document.getElementById("error2");
  const errorSpan3 = document.getElementById("error3");
  const errorSpan4 = document.getElementById("error4");
  const loginButton = document.getElementById("btn");
  const configurePassword = document.getElementById("configurepassword");
  // Email validation function
  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }
  function userName(user) {
    return user;
  }
  // Password validation function (You can add specific password requirements here)
  function validatePassword(password) {
    return password.length >= 6; // Minimum 6 characters
  }
  function configurepassword(conf) {
    return conf.length >= 6;
  }
  // Form submission handling
  loginButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form from submitting

    const email = emailInput.value;
    const password = passwordInput.value;
    const speech = text.value;
    let isValid = true;

    // Clear previous errors
    errorSpan.textContent = "";
    errorSpan2.textContent = "";
    errorSpan3.textContent = "";
    errorSpan4.textContent = "";
    // validate username
    if (userName(email) === "") {
      errorSpan4.textContent = "Please enter your username";
      isValid = false;
    }
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
    if (configurePassword !== validatePassword) {
      errorSpan3.textContent = "Passwords do not match!";
      isValid = true;
    }
    // If both email and password are valid, proceed with form submission
    if (isValid) {
      // Simulate form submission or handle actual submission via AJAX
      alert("Login successful!");
      window.location.href = "publicindex.html";
      // Reset the form after submission
      form.reset();
    }
  });
});
