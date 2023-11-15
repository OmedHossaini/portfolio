import React from 'react';
import './script.js'; 
import './style.css'; 

const PigGame = () => {
  return (
    <div className="pig-game">
      {/* Include the HTML content directly here */}
      <iframe title="Pig Game" src="/PigGame/index.html" width="100%" height="600px" />
    </div>
  );
};

export default PigGame;
