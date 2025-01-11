const quickQuestions = [
    "How do I set up a new source in Segment?",
    "How can I create a user profile in mParticle?",
    "How do I build an audience segment in Lytics?",
    "How can I integrate my data with Zeotap?",
];

const handleQuickQuestion = (question) => {
    setUserInput(question);
    sendMessage();
};

return (
    <div className="chat-container">
        <div className="messages">
            {messages.map((msg, index) => (
                <ChatMessage key={index} sender={msg.sender} text={msg.text} />
            ))}
            {isTyping && <p className="typing-indicator">Bot is typing...</p>}
        </div>
        <div className="quick-questions">
            {quickQuestions.map((question, index) => (
                <button key={index} onClick={() => handleQuickQuestion(question)}>
                    {question}
                </button>
            ))}
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
