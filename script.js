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

    // Phone button functionality
    const callButton = document.getElementById('call-button');
    callButton.addEventListener('click', function () {
        document.querySelector('.main-container').style.display = 'none';
        document.querySelector('.phone-interface').style.display = 'flex';
    });

    // Handle Other Contacts Button
    const otherContactsButton = document.getElementById('other-contacts-button');
    if (otherContactsButton) {
        otherContactsButton.addEventListener('click', function () {
            alert('Displaying other contacts...');
        });
    }

    // Messaging functionality

    // Handle message button click
    const messageButton = document.getElementById('message-button');
    messageButton.addEventListener('click', function () {
        document.querySelector('.main-container').style.display = 'none';
        document.querySelector('.messaging-interface').style.display = 'flex';
    });

    // Handle sending messages
    const sendMessageButton = document.getElementById('send-message-button');
    const messageInput = document.getElementById('message-input');
    const chatWindow = document.querySelector('.chat-window');

    sendMessageButton.addEventListener('click', function () {
        const messageText = messageInput.value;

        if (messageText.trim() !== "") {
            const messageBubble = document.createElement('div');
            messageBubble.classList.add('message', 'sent');
            messageBubble.textContent = messageText;

            chatWindow.appendChild(messageBubble);
            chatWindow.scrollTop = chatWindow.scrollHeight;

            messageInput.value = "";

            setTimeout(function () {
                const replyBubble = document.createElement('div');
                replyBubble.classList.add('message', 'received');
                replyBubble.textContent = "Received: " + messageText;
                chatWindow.appendChild(replyBubble);
                chatWindow.scrollTop = chatWindow.scrollHeight;
            }, 1000);
        }
    });

    // Back to Home button functionality (Messaging)
    const backToHomeButton = document.getElementById('back-to-home');
    backToHomeButton.addEventListener('click', function () {
        document.querySelector('.messaging-interface').style.display = 'none';
        document.querySelector('.main-container').style.display = 'flex';
    });

    // SOS functionality

    // Handle SOS button click
    const sosButton = document.getElementById('sos-button');
    sosButton.addEventListener('click', function () {
        document.querySelector('.main-container').style.display = 'none';
        document.querySelector('.sos-interface').style.display = 'flex';

        // Send emergency message
        alert('Emergency message sent to emergency contact.');

        // Start 3-second countdown before calling emergency services
        let countdown = 3;
        const countdownElement = document.getElementById('sos-countdown');
        const countdownInterval = setInterval(function () {
            countdown--;
            countdownElement.textContent = countdown;

            if (countdown === 0) {
                clearInterval(countdownInterval);
                alert('Calling emergency services...'); // Call emergency service
                // You can trigger an actual call here or any other functionality
            }
        }, 1000);
    });

    // Back to Home button functionality (SOS)
    const backToHomeSOSButton = document.getElementById('back-to-home-sos');
    backToHomeSOSButton.addEventListener('click', function () {
        document.querySelector('.sos-interface').style.display = 'none';
        document.querySelector('.main-container').style.display = 'flex';
        clearInterval(countdownInterval); // Stop the countdown if going back
    });
});
