
import React, { Component } from "react";
import OAuth2 from '../Components/OAuth2';
import Notes from '../Components/Notes';
import Calendar from '../Components/Calendar';
import ChatGPT from '../Components/ChatGPT';
import Tasks from '../Components/Tasks';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="grid-container">
          <div className="grid-item">
            <ChatGPT />
            <Notes />
            <Calendar />
            <Tasks />
            <OAuth2 />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Popup;
