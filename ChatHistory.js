import { useEffect } from "react";

useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem("chatHistory"));
    if (savedMessages) {
        setMessages(savedMessages);
    }
}, []);

useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
}, [messages]);
