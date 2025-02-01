const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const message = document.getElementById("message");
const roses = document.getElementById("roses");

noButton.addEventListener("click", () => {
    noButton.classList.add("moving"); // This triggers the movement animation
    setTimeout(() => {
        noButton.style.display = "none"; // Completely hide the "No" button after 3 seconds
    }, 3000); // Wait for 3 seconds (duration of animation)
});

yesButton.addEventListener("click", () => {
    message.textContent = "Thank you for being my Valentine!";
    message.style.color = "#e91e63";  // Dark pink color
    roses.style.display = "block";
    noButton.disabled = true; // Disable "No" button after clicking "Yes"
});
