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

    // Toggle Torch Button
    const torchButton = document.getElementById('torch-toggle');
    torchButton.addEventListener('click', function () {
        if (torchButton.textContent === 'Off') {
            torchButton.textContent = 'On';
        } else {
            torchButton.textContent = 'Off';
        }
    });

    // Sound control slider
    const volumeSlider = document.getElementById('volume-slider');
    volumeSlider.addEventListener('input', function () {
        const volume = volumeSlider.value;
        console.log(`Volume set to: ${volume}`);
    });

    // Brightness control slider
    const brightnessSlider = document.getElementById('brightness-slider');
    brightnessSlider.addEventListener('input', function () {
        const brightness = brightnessSlider.value;
        console.log(`Brightness set to: ${brightness}`);
    });

    // Call button functionality
    const callButton = document.getElementById('call-button');
    callButton.addEventListener('click', function () {
        window.location.href = 'phone.html'; // Navigate to phone interface
    });
});

