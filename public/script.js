function openModal() {
    // document.getElementById("loginModal").style.display = "block";
    window.location.href = "login.html";
}


function submitForm() {
    closeModal();
}

function openSignupModal() {
    // document.getElementById("signupModal").style.display = "block";
    window.location.href = "signup.html";
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
function openTherapistFinder(){
    window.location.href = 'therapist.html';
}
function openGuidedMeditation(){
    window.location.href = 'guidedMeditation.html';
}
function openGoalSettingAndReminder(){
    window.location.href = 'goalsetter.html';
}