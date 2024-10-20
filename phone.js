document.addEventListener("DOMContentLoaded", function () {
    // Handle call button clicks
    const callButtons = document.querySelectorAll('.call-button');
    callButtons.forEach(button => {
        button.addEventListener('click', function () {
            const contactName = this.previousElementSibling.textContent;
            alert(`Calling ${contactName}...`);
        });
    });

    // Handle "Other Contacts" button click
    const otherContactsButton = document.querySelector('.other-contacts-button');
    otherContactsButton.addEventListener('click', function () {
        alert('Navigating to other contacts...');
        // Here you can add navigation to other contacts page or functionality
    });
});
