import React, { useState } from "react";
import "./App.css";

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="App">
      <div className="card" onClick={handleClick}>
        Click me!
      </div>
      {showMessage && (
        <div className="message">
          <p className="message-text">
            Happy Holi, Shreya! Sending colorful wishes to you, uncle, aunty,
            dii and whole family!
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
