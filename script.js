// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Function to update the clock
    function updateClock() {
        const now = new Date();
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true // Use 12-hour format
        };
        const timeString = now.toLocaleTimeString([], options); // Get the current time
        document.querySelector('.clock').textContent = timeString; // Update the clock display
    }

    // Call the updateClock function every minute
    setInterval(updateClock, 60000);

    // Initial call to display clock immediately on load
    updateClock();
});
