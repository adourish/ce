
import React, { Component } from "react";

import Notes from '../Components/NotesComponent';
import Calendar from '../Components/CalendarComponent';
import ChatGPT from '../Components/ChatGPTComponent';
import Tasks from '../Components/TasksComponent';
import TerminalPopup from '../Components/TerminalPopup';
import Chat from '../Components/ChatComponent';
import Mail from '../Components/MailComponent';
import Feed from '../Components/FeedComponent';
import './Popup.css';

const Popup = () => {
  return (
    <div className="popup-container">

      <ChatGPT />
      <Notes />
      <Calendar />
      <Tasks />
      <Mail />
      <Chat />
      <Feed />
      <TerminalPopup />
    </div>
  );
};

export default Popup;
