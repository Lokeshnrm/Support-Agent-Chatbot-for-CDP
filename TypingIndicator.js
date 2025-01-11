import React, { useState } from "react";
import ChatMessage from "./ChatMessage";

function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [isTyping, setIsTyping] = useState(false); // Typing indicator state

    const sendMessage = async () => {
        if (userInput.trim() === "") return;

        const userMessage = { sender: "user", text: userInput };
        setMessages([...messages, userMessage]);

        setUserInput("");
        setIsTyping(true); // Show typing indicator

        // Simulate typing delay
        setTimeout(async () => {
            const response = await fetch(`/chat?question=${encodeURIComponent(userInput)}`);
            const botMessage = await response.text();

            setIsTyping(false); // Hide typing indicator
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: "bot", text: botMessage },
            ]);
        }, 1000);
    };

    return (
        <div className="chat-container">
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
}

export default Chatbot;
