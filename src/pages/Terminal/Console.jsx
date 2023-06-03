import React, { useState } from 'react';
import './Console.css';

function Console({ inputText, setInputText, content, setContent }) {
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setContent([...content, inputText]);
    setInputText('');
  };

  return (
    <div className="console">
      <div className="console-content">
        {content.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Console;