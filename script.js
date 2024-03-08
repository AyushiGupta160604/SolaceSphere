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


function openMoodTracker(){
    // Redirect to the Mood Tracker page
    window.location.href = 'moodTracker.html';
    }


function openGamesDashboard() {
    // You can replace the following URL with the actual URL of your gaming dashboard
    window.location.href = 'gaming_dashboard.html';
}

function openPomodoro() {
    // You can replace the following URL with the actual URL of your gaming dashboard
    window.location.href = 'pomodoro.html';
}

// Add an event listener to the "Let's play GAMES" card
// document.getElementById('gamesCard').addEventListener('click', openGamesDashboard);
// Assume this function is triggered when the user successfully logs in
function loginUser() {
    // Simulate a successful login
    const username = "exampleUser";

    // Store user information in localStorage (for demo purposes)
    localStorage.setItem("loggedInUser", username);

    // Redirect to the personalized dashboard
    redirectToDashboard();
}

// Function to redirect to the personalized dashboard
function redirectToDashboard() {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
        // Redirect to the personalized dashboard page
        window.location.href = `dashboard.html?user=${loggedInUser}`;
    } else {
        // Handle the case when the user is not logged in
        console.error("User not logged in");
    }
}

function redirectToJournal() {
    window.location.href = 'journal.html';
}
