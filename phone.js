document.addEventListener("DOMContentLoaded", function () {
    // Handle call button clicks
    const callButtons = document.querySelectorAll('.call-button');
    callButtons.forEach(button => {
        button.addEventListener('click', function () {
            const contactName = this.previousElementSibling.textContent;
            alert(`Calling ${contactName}...`); // Corrected string interpolation
        });
    });

    // Handle "Other Contacts" button click
    const otherContactsButton = document.getElementById('other-contacts-button'); // Corrected selection by ID
    otherContactsButton.addEventListener('click', function () {
        alert('Navigating to other contacts...');
    });

    // Handle Back button click
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', function () {
        window.location.href = 'index.html'; // Navigate back to home (index.html)
    });
});
