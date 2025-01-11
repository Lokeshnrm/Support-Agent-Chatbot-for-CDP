import React from "react";

function ChatMessage({ sender, text }) {
    const isBot = sender === "bot";
    return (
        <div className={`chat-message ${isBot ? "bot" : "user"}`}>
            <p>{text}</p>
        </div>
    );
}

export default ChatMessage;
