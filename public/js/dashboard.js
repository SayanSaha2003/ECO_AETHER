window.onload = function () {
    let company = localStorage.getItem("company");
    let industry = localStorage.getItem("industry");
    let location = localStorage.getItem("location");

    document.getElementById("welcomeCompany").innerHTML = "Welcome, " + company;

    document.getElementById("industryText").innerHTML = "Industry: " + industry;

    document.getElementById("locationText").innerHTML = "Location: " + location;
};

function logoutUser() {
    localStorage.clear();

    alert("Logged Out Successfully");

    window.location.href = "login.html";
}
function generateReport() {
    alert("Generating Compliance Report...");
}

function findConsultant() {
    alert("Opening Consultant Directory...");
}

function viewRegulations() {
    alert("Loading Regulations...");
}

function scheduleAudit() {
    alert("Scheduling Audit...");
}

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

// Dark Mode Toggle
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}
function toggleNotification() {
    const popup = document.getElementById("notificationPopup");

    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}

// Close popup when clicking outside
document.addEventListener("click", function (event) {
    const popup = document.getElementById("notificationPopup");
    const bell = document.querySelector(".notification");

    if (
        popup &&
        bell &&
        !popup.contains(event.target) &&
        !bell.contains(event.target)
    ) {
        popup.style.display = "none";
    }
});