import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Terminal.css';
import './Terminal.scss';
import { runScriptOnWindow } from '../Content/modules/closeWindow';
const Terminal = () => {
  runScriptOnWindow("https://www.amplenote.com/notes", "console.log('found it')");
  return (
    <div className="App">
      <header className="App-header">

        terminal
      </header>
    </div>
  );
};

export default Terminal;
