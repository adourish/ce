
import React, { Component } from "react";
import OAuth2 from './OAuth2';
import Notes from './Notes';
import Calendar from './Calendar';
import ChatGPT from './ChatGPT';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div class="grid-container">
          <div class="grid-item">
            <ChatGPT />
            <Notes />
            <Calendar />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Popup;
