import React, { useState } from "react";
import SuggestionDoc from "./SuggesstionDoc/SuggesstionDoc";
import Diet from "./Diet";
import { FaRobot } from "react-icons/fa"; // AI Icon
import "./FoodCom.css"; // Import the CSS file

const FoodCom = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Diet />
      <SuggestionDoc />

      {/* Floating Chat Button with Name */}
      <button className="chatbox-icon" onClick={() => setIsOpen(!isOpen)}>
        <FaRobot className="chat-icon" />
        <span className="chat-text">ChatAI</span>
      </button>

      {/* Chatbox Popup */}
      {isOpen && (
        <div className="chatbox-container">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/SO1jbjjkLxoBLtuGwtsFo"
            className="chatbox-iframe"
          ></iframe>
          {/* Close Button */}
          <button className="chatbox-close" onClick={() => setIsOpen(false)}>
            ✖
          </button>
        </div>
      )}
    </div>
  );
};

export default FoodCom;
