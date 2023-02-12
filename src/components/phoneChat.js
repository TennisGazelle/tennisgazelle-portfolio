import React, { useState, useEffect } from 'react';
// import './App.css';
import './PhoneChat.scss';

function PhoneChat() {
  const [messages, setMessages] = useState([
    {
      text: 'hi there',
      type: 'sent'
    }
  ]);
  const [input, setInput] = useState('');

  // Send a message to the GPT chat API
  const sendMessage = async () => {
    const response = await fetch('https://api.chat-gpt.com/send', {
      method: 'POST',
      body: JSON.stringify({
        message: input,
      }),
    });
    const data = await response.json();
    setMessages([...messages, { text: input, type: 'sent' }]);
    setInput('');
    setMessages([...messages, { text: data.response, type: 'received' }]);
  };

  // Fade out the message after a few seconds
  const fadeOutMessage = (index) => {
    setTimeout(() => {
      const newMessages = [...messages];
      newMessages[index] = { ...newMessages[index], fade: true };
      setMessages(newMessages);
    }, 3000);
  };

  useEffect(() => {
    // If there are new messages, start the fade out process
    if (messages.length > 0) {
      messages.forEach((message, index) => {
        if (!message.fade) {
          fadeOutMessage(index);
        }
      });
    }
  }, [messages, input]);

  return (
    <div className="chat-container">
      <div className="chat-header">Chat</div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.type} ${message.fade ? 'fade' : ''}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default PhoneChat;
