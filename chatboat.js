function sendMessage() {
    const userInput = document.getElementById('userQuery').value.trim();
    if (userInput === '') return;

    addMessageToHistory(userInput, 'user');

    document.getElementById('userQuery').value = '';

    setTimeout(() => {
        const botResponse = `You said: "${userInput}". How can I help further?`;
        addMessageToHistory(botResponse, 'bot');
    }, 500);
}

function addMessageToHistory(message, sender) {
    const chatHistory = document.getElementById('chatHistory');

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender);

    const messageContent = document.createElement('div');
    messageContent.classList.add('message');
    messageContent.textContent = message;

    messageDiv.appendChild(messageContent);
    chatHistory.appendChild(messageDiv);

    chatHistory.scrollTop = chatHistory.scrollHeight;
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
