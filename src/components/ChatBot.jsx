import React, { useEffect } from 'react';
import '../styles/ChatBot.css'; // Importing the CSS for styling

const Chatbot = () => {
  useEffect(() => {
    // Dynamically load the script for chatbot functionality
    const script = document.createElement('script');
    script.src = '/chatbot/script.js'; // Correct path to the script in the public folder
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script after unmounting the component
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="chatbot-container">
      {/* Using iframe to load the chatbot's HTML */}
      <iframe 
        src="/chatbot/index.html" 
        title="Chatbot" 
        style={{ width: '100%', height: '500px', border: 'none' }}
      ></iframe>
    </div>
  );
};

export default Chatbot;
