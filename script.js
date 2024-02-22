function openModal() {
    document.getElementById("loginModal").style.display = "block";
}

function closeModal() {
    document.getElementById("loginModal").style.display = "none";
}

function submitForm() {
    closeModal();
}

function openSignupModal() {
    document.getElementById("signupModal").style.display = "block";
}

function closeSignupModal() {
    document.getElementById("signupModal").style.display = "none";
}

function submitSignupForm() {
    // Handle signup form submission logic here
    // You may want to perform validation and send data to the server
    closeSignupModal();  // Close the modal after submission
}

// Add this function to your script.js file
function checkExistingUser() {
    const signupUsername = document.getElementById("signupUsername").value;
    const signupEmail = document.getElementById("signupEmail").value;

    // Assuming you have a function on the server to check if the user already exists
    // You may need to implement this on the server side
    const userExists = checkUserExistence(signupUsername, signupEmail);

    if (userExists) {
        showSignupNotification("User already exists. Please login or use a different username/email.");
    } else {
        // Continue with signup logic
        submitSignupForm();
    }
}

// function checkUserExistence(username, email) {
//     // Implement this function to check user existence on the server
//     // Return true if the user already exists, false otherwise
//     // You might need to make an API call to your server for this
//     // Example: return makeServerApiCall("/checkUserExistence", { username, email });
//     // Replace makeServerApiCall with your actual API call function
//     return false;  // Replace this with your server response
// }

// function showSignupNotification(message) {
//     const notificationElement = document.getElementById("signupNotification");
//     notificationElement.textContent = message;
//     notificationElement.style.display = "block";

//     // Automatically hide the notification after a few seconds (adjust as needed)
//     setTimeout(() => {
//         notificationElement.style.display = "none";
//     }, 5000);
// }



// document.addEventListener('DOMContentLoaded', function () {
//     // Select all links with the class 'scroll-link'
//     const scrollLinks = document.querySelectorAll('.scroll-link');

//     // Add click event listeners to each link
//     scrollLinks.forEach(link => {
//         link.addEventListener('click', function (e) {
//             e.preventDefault(); // Prevent default anchor behavior

//             const targetId = this.getAttribute('href').substring(1); // Get the target element's ID
//             const targetElement = document.getElementById(targetId); // Find the target element

//             if (targetElement) {
//                 // Scroll smoothly to the target element
//                 window.scrollTo({
//                     top: targetElement.offsetTop,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
// });
