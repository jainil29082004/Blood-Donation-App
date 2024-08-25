// script.js

// Sample donor data
const donors = [
    { name: "John Doe", bloodType: "A+", lastDonation: "2023-12-01" },
    { name: "Jane Smith", bloodType: "O-", lastDonation: "2024-01-15" },
    { name: "Michael Johnson", bloodType: "B+", lastDonation: "2023-11-20" }
];

// Function to display donor information
function displayDonors() {
    const donorList = document.getElementById("donor-list");
    donorList.innerHTML = "";
    donors.forEach(donor => {
        const listItem = document.createElement("li");
        listItem.textContent = `${donor.name} (${donor.bloodType}), Last Donation: ${donor.lastDonation}`;
        donorList.appendChild(listItem);
    });
}

// 4.js

// Function to handle form submission and redirect
function scheduleAppointment(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const bloodType = document.getElementById('blood-type').value;
    const appointmentDate = document.getElementById('appointment-date').value;

    // Store form data in localStorage for retrieval on the next page
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('bloodType', bloodType);
    localStorage.setItem('appointmentDate', appointmentDate);

    // Redirect to the next page
    window.location.href = 'appointment.html'; // Replace 'next_page.html' with the URL of your next page
}

// Function to handle blood donation
function donateBlood() {
    alert("Thank you for your willingness to donate blood. Your contribution can save lives!");
}

const events = [
    { name: "Blood Donation Camp", date: "2024-03-15", location: "Community Center" },
    { name: "Blood Drive", date: "2024-04-20", location: "City Park" }
];

// Function to display upcoming events
function displayEvents() {
    const eventsList = document.getElementById("events-list");
    eventsList.innerHTML = ""; // Clear existing list items
    events.forEach(event => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<span>${event.name}</span> - Date: ${event.date}, Location: ${event.location}`;
        eventsList.appendChild(listItem);
    });
}

// Display initial content
displayEvents();



displayDonors();
displayEvents();
