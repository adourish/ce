import React, { useState } from 'react';

import './Console.css';
import { options } from '../Options/Options';
import OpenAI from 'openai';
const openaiAPIKey = options.openaiAPIKey;
console.log('openaiAPIKey', openaiAPIKey);
const openai = new OpenAI({
  apiKey: openaiAPIKey,
  dangerouslyAllowBrowser: true
});


async function chat(text, setContent) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: text }],
    });

    if (response && response.choices && response.choices.length > 0) {
      const output = response.choices[0]?.message?.content || '';
      console.log('Output:', output);
      setContent((prevContent) => [...prevContent, output]); // Update the content state
    } else {
      console.error('Response does not contain valid data.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

function Console({ inputText, setInputText, content, setContent }) {
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const command = inputText.trim();
    console.log('submit:', command);
    if (command.startsWith('/')) {
      const commandParts = command.split(' ');
      const cmd = commandParts[0];
      const text = commandParts.slice(1).join(' ');

      switch (cmd) {
        case '/note':
          handleNoteCommand(text);
          break;
        case '/chat':
          console.log('chat:', command);
          handleChatCommand(text);
          break;
        case '/task':
          handleTaskCommand(text);
          break;
        case '/cal':
          handleCalCommand(text);
          break;
        default:
          console.log('default:', command);
          chat(command, setContent);
          handleChatCommand(command);
      }
    } else {
      // Handle regular input
      console.log('content:', command);
      chat(command, setContent);
      setContent([...content, command]);
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
    chat(text);
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