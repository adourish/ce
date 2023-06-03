import React, { useState } from 'react';
import './Console.css';
function Console({ inputText, setInputText, content, setContent }) {
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const command = inputText.trim();
    console.log('test submit:', command);
    if (command.startsWith('/')) {
      const commandParts = command.split(' ');
      const cmd = commandParts[0];
      const text = commandParts.slice(1).join(' ');

      switch (cmd) {
        case '/note':
          handleNoteCommand(text);
          break;
        case '/chat':
          handleChatCommand(text);
          break;
        case '/task':
          handleTaskCommand(text);
          break;
        case '/cal':
          handleCalCommand(text);
          break;
        default:
          handleUnknownCommand();
      }
    } else {
      // Handle regular input
      setContent([...content, inputText]);
    }

    setInputText('');
  };

  const handleNoteCommand = (text) => {
    // Handle "/note" command
    // Example: add note logic
    console.log('Note:', text);
  };

  const handleChatCommand = (text) => {
    // Handle "/chat" command
    // Example: add chat logic
    console.log('Chat:', text);
  };

  const handleTaskCommand = (text) => {
    // Handle "/task" command
    // Example: add task logic
    console.log('Task:', text);
  };

  const handleCalCommand = (text) => {
    // Handle "/cal" command
    // Example: add calendar logic
    console.log('Calendar:', text);
  };

  const handleUnknownCommand = () => {
    // Handle unknown command
    console.log('Unknown command');
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