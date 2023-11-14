import React, { useState } from 'react';
import './Console.css';
import { options } from '../Options/Options';
import OpenAI from 'openai';

const openaiAPIKey = options.openaiAPIKey;
console.log('openaiAPIKey', openaiAPIKey);
const openai = new OpenAI({
  apiKey: openaiAPIKey,
  dangerouslyAllowBrowser: true,
});

async function chat(text, model, context, setContent) {
  try {
    const messages = [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'assistant', content: context }, // Include context as a message
      { role: 'user', content: text },
    ];

    const response = await openai.chat.completions.create({
      model: model,
      messages: messages,
    });

    if (response && response.choices && response.choices.length > 0) {
      const output = response.choices[0]?.message?.content || '';
      console.log('Output:', output);
      setContent((prevContent) => [...prevContent, output]);
    } else {
      console.error('Response does not contain valid data.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

function Console({ inputText, setInputText, content, setContent }) {
  const [context, setContext] = useState('');
  const maxChars = 9000;

  const totalChars = context.length + inputText.length;
  const remainingChars = maxChars - totalChars;

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputText(value);
  };

  const handleContextChange = (event) => {
    const value = event.target.value;
    setContext(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const command = inputText.trim();

    if (command.length > remainingChars) {
      console.log('Input exceeds character limit.');
      return;
    }

    console.log('submit:', command);

    if (command.startsWith('/')) {
      const commandParts = command.split(' ');
      const cmd = commandParts[0];
      const text = commandParts.slice(1).join(' ');

      switch (cmd) {
        case '/gpt3':
          console.log('chat:', command);
          chat(text, 'gpt-3.5-turbo', context, setContent);
          setContent([...content, command]);
          handleChatCommand('gpt-3.5-turbo:' + text);
          break;
        case '/gpt4':
          chat(text, 'gpt-4', context, setContent);
          setContent([...content, command]);
          handleChatCommand('gpt4:' + text);
          break;
        default:
          console.log('default:', command);
          chat(text, 'gpt-3.5-turbo', context, setContent);
          setContent([...content, command]);
          handleChatCommand(text);
      }
    } else {
      console.log('content:', command);
      chat(command, 'gpt-3.5-turbo', context, setContent);
      setContent([...content, command]);
    }

    setInputText('');
  };

  const handleNoteCommand = (text) => {
    console.log('Note:', text);
  };

  const handleChatCommand = (text) => {
    chat(text, 'gpt-3.5-turbo', context, setContent);
    console.log('Chat:', text);
  };

  const handleTaskCommand = (text) => {
    console.log('Task:', text);
  };

  const handleCalCommand = (text) => {
    console.log('Calendar:', text);
  };

  const handleUnknownCommand = () => {
    console.log('Unknown command');
  };

  return (
    <div className="console">
      <div className="console-content">
        {content.map((text, index) => (
          <pre key={index}>{text}</pre>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <div className="char-count">
          {totalChars}/{maxChars} characters remaining
        </div>
        <textarea
          value={context}
          onChange={handleContextChange}
          placeholder="Context (optional)"
          className="input-textarea context-textarea"
        ></textarea>
        <div className="input-area">
          <textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Question"
            className="input-textarea question-textarea"
          ></textarea>
          <button type="submit" className="submit-button">
            🤔
          </button>
        </div>
      </form>
    </div>
  );
}

export default Console;
