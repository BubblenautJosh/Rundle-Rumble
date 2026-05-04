const apiUrl = "https://script.google.com/macros/s/AKfycbxb4J8tD1xuScSGjJx8JxLEg6osAFim8A5ObglE7ZXcNo05QewFQLDdrWVU-o5smjqW/exec";

function login() {
    const code = document.getElementById("codeInput").value.trim();
    // Check if user was trying to go to a specific page
    const redirectTo = localStorage.getItem("redirectAfterLogin") || "index.html";

    fetch(`${apiUrl}?action=database&pin=${encodeURIComponent(code)}`)
    .then(res => res.json())
    .then(user => {
        if (user && user.Name) {
            localStorage.setItem("loggedInUser", user.Name);
            localStorage.removeItem("redirectAfterLogin"); // clear temp
            window.location.href = redirectTo; // go to the intended page
        } else {
            localStorage.clear();
            document.getElementById("errorMessage").textContent = "Invalid PIN";
        }
    })
    .catch(err => {
        console.error("Error fetching user:", err);
        document.getElementById("errorMessage").textContent = "Error connecting to server";
    });
}