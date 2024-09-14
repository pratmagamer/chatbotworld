document.getElementById('send-button').addEventListener('click', sendMessage);

// Listen for "Enter" key press inside the input box
document.getElementById('message-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const inputBox = document.getElementById('message-input');
    const messageText = inputBox.value.trim();
    
    if (messageText === '') return;  // If input is empty, do nothing

    // Create a user message
    createMessage(messageText, 'user-message');
    
    // Clear the input box
    inputBox.value = '';

    // Simulate a bot response after a delay
    setTimeout(() => {
        const botReply = generateBotReply(messageText);
        createMessage(botReply, 'bot-message');
    }, 1000);  // 1 second delay for bot response
}

function createMessage(text, className) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = text;

    const chatBox = document.getElementById('chat-box');
    chatBox.appendChild(messageElement);

    // Scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotReply(userMessage) {
    // Command detection
    if (userMessage === '!help') {
        return 'What is your command? "!help", "!fun fact", "are you good"';
    } else if (userMessage === 'fack') {
		return '****?';
	} else if (userMessage === 'hi') {
		return 'hello';
	} else if (userMessage === 'hello') {
		return 'hi, you can change language type 1';
	} else if (userMessage === '1') {
		return 'type: "!id" for indonesian. "!en" english. "!0" zun ';
	} else if (userMessage === '!id') {
		return 'sekarang kamu hanya bisa menegetikan kata tertentu saja agar saya bisa membalas dengan bahasa indonesia';
	} else if (userMessage === '!en') {
		return 'now you can type anything';
	} else if (userMessage === '!0') {
		return 'berjuang dengan kehidupan dan masyarakat, siswa sekolah menengah Michio Kaga berkeliaran di Internet dan mendarat di situs web yang aneh. Situs web, yang menampilkan sejumlah pertanyaan dan sistem berbasis poin, memungkinkan seseorang untuk menciptakan keterampilan dan kemampuan untuk karakter. Setelah menyelesaikan karakternya, Kaga dipindahkan ke dunia fantasi seperti game dan terlahir kembali sebagai pria kuat yang dapat mengklaim gadis setingkat idola. Maka dimulailah legenda cheat dan harem dari seorang pria yang terlahir kembali! Sumber: Berita MAL';
	} else if (userMessage === '!fun fact') {
        // Random fun facts array
        const funFacts = [
            "Did you know? Honey never spoils.",
            "Bananas are berries, but strawberries aren't.",
            "Octopuses have three hearts!",
            "Wombat poop is cube-shaped.",
            "Sharks have been around longer than trees!"
        ];
        return funFacts[Math.floor(Math.random() * funFacts.length)];
    }

    // Default responses for other messages
    const replies = [
        "That's interesting!",
        "Tell me more!",
        "I'm here to listen.",
        "Can I help you with something else?",
        "Sounds good!"
    ];

    return replies[Math.floor(Math.random() * replies.length)];
}
