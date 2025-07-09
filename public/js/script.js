(() => {
    "use strict";
    // Select all forms with the class 'needs-validation'
    const forms = document.querySelectorAll(".needs-validation");

    // Add an event listener to each form
    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                // Check form validity
                if (!form.checkValidity()) {
                    event.preventDefault(); // Prevent form submission
                    event.stopPropagation(); // Stop event propagation
                }
                // Add class to visually indicate validation status
                form.classList.add("was-validated");
            },
            false // Use capture or bubble phase (false means bubble phase)
        );
    });
})();
