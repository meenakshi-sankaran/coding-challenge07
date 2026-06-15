// Step 5: Select relevant DOM elements using their precise IDs
const headlineInput = document.getElementById("headline-input");
const updateButton = document.getElementById("update-btn");
const ctaHeadline = document.getElementById("cta-headline");

// Attach an event listener to catch the user's action
updateButton.addEventListener("click", function() {
    // Read the current string value from the text input field
    const newText = headlineInput.value.trim();

    // Condition to prevent breaking layout structure if field is completely empty
    if (newText !== "") {
        // Update the textual content inside the target <h2> element
        ctaHeadline.textContent = newText;
        
        // Optional structural polish: clear out the entry field after submission
        headlineInput.value = "";
    } else {
        alert("Please enter a valid text phrase to modify the headline component.");
    }
});