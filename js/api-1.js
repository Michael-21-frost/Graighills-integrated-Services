/*
THIS API IS FOR THE GRAIGHILLS FM SERVICE BOOKING FORM
<!--GRAIGHILLS GROUP
26th November, 2024
All rights reserved.
Developer | Michael Otote CEO OTOTECH INDUSTRIES -->
*/
// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnbbMyN54-yf4bX2pL5t-R74YuGl_Jy5c",
    authDomain: "graighillsgroup-aa05b.firebaseapp.com",
    projectId: "graighillsgroup-aa05b",
    storageBucket: "graighillsgroup-aa05b.appspot.com",
    messagingSenderId: "670653561485",
    appId: "1:670653561485:web:5e1d2a8c92c7ee645280c4",
    measurementId: "G-HCMTZXWQ3V"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Handle form submission
document.getElementById('booking').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form values..... importing from the two forms
    const name = document.getElementById('Name').value;
    const email = document.getElementById('Email').value;
    const phoneNumber = document.getElementById('PhoneNumber').value;
    const serviceDetails = document.getElementById('serviceDescription').value;
    const preferredDate = document.getElementById('preferredDate').value;
    const serviceAddress = document.getElementById('Location').value;
    const urgency = document.querySelector('input[name="urgency"]:checked').value;

    try {
        // Save to Firestore
        await addDoc(collection(db, 'bookings'), {
            name,
            email,
            phoneNumber,
            serviceDetails,
            preferredDate,
            serviceAddress,
            urgency,
            timestamp: new Date()
        });

        // Show confirmation modal
        const modal = document.getElementById('confirmationModal');
        modal.style.display = 'flex';

        // Reset the form
        document.getElementById('booking').reset();

        // Move back to the first fieldset
        const fieldsets = document.querySelectorAll('fieldset');
        fieldsets.forEach((fieldset, index) => {
            if (index !== 0) {
                fieldset.style.display = 'none'; // Hide other fieldsets
            } else {
                fieldset.style.display = 'block'; // Show the first fieldset
            }
        });

    } catch (error) {
        console.error('Error saving booking: ', error);
        alert('Error submitting booking. Please try again.');
    }
});

// Modal close functionality
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('confirmationModal').style.display = 'none';
});

document.getElementById('modalOkBtn').addEventListener('click', () => {
    document.getElementById('confirmationModal').style.display = 'none';
});

