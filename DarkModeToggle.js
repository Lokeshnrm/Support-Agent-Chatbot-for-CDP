const [isDarkMode, setIsDarkMode] = useState(false);

const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
};

return (
    <div className={`chat-container ${isDarkMode ? "dark" : ""}`}>
        <div className="dark-mode-toggle">
            <label>
                <input type="checkbox" onChange={toggleDarkMode} />
                Dark Mode
            </label>
        </div>
        <div className="messages">
            {messages.map((msg, index) => (
                <ChatMessage key={index} sender={msg.sender} text={msg.text} />
            ))}
            {isTyping && <p className="typing-indicator">Bot is typing...</p>}
        </div>
        <div className="input-container">
            <input
                type="text"
                placeholder="Ask me anything..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    </div>
);
