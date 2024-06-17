import React, { useState } from 'react';

const WelcomeScreen = ({ onNameSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', name);
    onNameSubmit(name);
  };

  return (
    <div className="welcome-screen">
      <h1>Welcome to the Tile Matching Game!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Start Game</button>
      </form>
    </div>
  );
};

export default WelcomeScreen;
