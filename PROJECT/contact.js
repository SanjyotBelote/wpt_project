document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Clear previous error messages
    document.getElementById("errors").innerHTML = "";
    
    // Get form values
    var nameInput = document.getElementById("exampleFormControlInput1").value.trim();
    var emailInput = document.getElementById("exampleFormControlInput2").value.trim();
    var phoneInput = document.getElementById("exampleFormControlInput3").value.trim();
    
    // Validate name (no numeric values)
    if (/\d/.test(nameInput)) {
      displayError("Name should not have numeric values.");
    }
    
    // Validate email address
    if (!validateEmail(emailInput)) {
      displayError("Invalid email address.");
    }
    
    // Validate phone number
    if (!validatePhoneNumber(phoneInput)) {
      displayError("Invalid phone number.");
    }
    
    // If there are no errors, submit the form
    if (document.getElementById("errors").innerHTML === "") {
      event.target.submit();
    }
  });
  
  function displayError(errorMessage) {
    var errorDiv = document.getElementById("errors");
    var errorParagraph = document.createElement("p");
    errorParagraph.textContent = errorMessage;
    errorDiv.appendChild(errorParagraph);
  }
  
  function validateEmail(email) {
    // Use a regular expression to validate email format
    var emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }
  
  function validatePhoneNumber(phone) {
    // Use a regular expression to validate phone number format
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }
  