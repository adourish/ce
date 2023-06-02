
import React, { Component } from "react";

import Notes from '../Components/Notes';
import Calendar from '../Components/Calendar';
import ChatGPT from '../Components/ChatGPT';
import Tasks from '../Components/Tasks';
import TerminalPopup from '../Components/TerminalPopup';
import './Popup.css';

const Popup = () => {
  return (
    <div className="popup-container">

      <ChatGPT />
      <Notes />
      <Calendar />
      <Tasks />

      <TerminalPopup />
    </div>
  );
};

export default Popup;
