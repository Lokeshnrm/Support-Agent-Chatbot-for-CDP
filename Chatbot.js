import React, { useState } from "react";
import ChatMessage from "./ChatMessage";

function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");

    const sendMessage = async () => {
        if (userInput.trim() === "") return;

        const userMessage = { sender: "user", text: userInput };
        setMessages([...messages, userMessage]);

        setUserInput(""); // Clear input field

        // Send the question to the backend
        const response = await fetch(`/chat?question=${encodeURIComponent(userInput)}`);
        const botMessage = await response.text();

        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "bot", text: botMessage },
        ]);
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((msg, index) => (
                    <ChatMessage key={index} sender={msg.sender} text={msg.text} />
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
}

export default Chatbot;
