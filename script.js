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

// Add an event listener to the "Let's play GAMES" card
document.getElementById('gamesCard').addEventListener('click', openGamesDashboard);
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

// function redirectToJournal() {
//     const loggedInUser = localStorage.getItem("loggedInUser");

//     if (loggedInUser) {
//         // Redirect to the personalized journal page
//         window.location.href = `journal/${loggedInUser}-journal.html`;
//     } else {
//         // Handle the case when the user is not logged in
//         console.error("User not logged in");
//     }
// }
function redirectToJournal() {
    // You can replace the following URL with the actual URL of your gaming dashboard
    window.location.href = 'journal.html';
}
// // Function to create a new notebook
// function createNewNotebook() {
//     const notebook = {
//         title: prompt("Enter the title for your new notebook:"),
//         entries: [],
//     };

//     // Save the new notebook to localStorage
//     localStorage.setItem("notebook", JSON.stringify(notebook));

//     // Handle this as needed
//     console.log("New notebook created:", notebook);
// }

// // Function to save an entry to the current notebook
// function saveEntry() {
//     const entry = document.getElementById('entry').value;

//     // Retrieve the current notebook from localStorage
//     const notebookString = localStorage.getItem("notebook");
//     let notebook = notebookString ? JSON.parse(notebookString) : null;

//     if (notebook) {
//         // Add the new entry
//         notebook.entries.push(entry);

//         // Save the updated notebook to localStorage
//         localStorage.setItem("notebook", JSON.stringify(notebook));

//         // Clear the entry form
//         document.getElementById('entry').value = "";

//         // Display previous entries
//         displayPreviousEntries();

//         console.log("Entry saved:", entry);
//     } else {
//         console.error("No notebook found");
//     }
// }

// // Function to display previous entries
// function displayPreviousEntries() {
//     const previousEntriesContainer = document.getElementById('previousEntries');
//     previousEntriesContainer.innerHTML = "";

//     // Retrieve the current notebook from localStorage
//     const notebookString = localStorage.getItem("notebook");
//     let notebook = notebookString ? JSON.parse(notebookString) : null;

//     if (notebook) {
//         notebook.entries.forEach((entry, index) => {
//             const entryDiv = document.createElement('div');
//             entryDiv.innerHTML = `<strong>Entry ${index + 1}:</strong> ${entry}`;
//             previousEntriesContainer.appendChild(entryDiv);
//         });
//     } else {
//         console.error("No notebook found");
//     }
// }

let notebooks = [];
let currentNotebook = null;

function createNewNotebook() {
    const notebookTitle = prompt('Enter the notebook title:');
    if (notebookTitle) {
        const newNotebook = {
            title: notebookTitle,
            entries: []
        };
        notebooks.push(newNotebook);
        displayNotebooks();
        setCurrentNotebook(newNotebook);
    }
}

function setCurrentNotebook(notebook) {
    currentNotebook = notebook;
    displayCurrentNotebook();
}

function displayNotebooks() {
    const notebooksList = document.getElementById('notebooks-list');
    notebooksList.innerHTML = '';
    notebooks.forEach((notebook, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = notebook.title;
        listItem.addEventListener('click', () => setCurrentNotebook(notebook));
        notebooksList.appendChild(listItem);
    });
}

function displayCurrentNotebook() {
    const notebookTitle = document.getElementById('notebook-title');
    const entriesList = document.getElementById('entries-list');

    notebookTitle.textContent = currentNotebook.title;

    entriesList.innerHTML = '';
    currentNotebook.entries.forEach((entry, index) => {
        const entryItem = document.createElement('div');
        entryItem.textContent = entry;
        entriesList.appendChild(entryItem);
    });
}

function saveEntry() {
    const entryText = document.getElementById('entry').value;
    if (entryText) {
        currentNotebook.entries.push(entryText);
        displayCurrentNotebook();
        document.getElementById('entryForm').reset();
    }
}

// Initial display
createNewNotebook();
