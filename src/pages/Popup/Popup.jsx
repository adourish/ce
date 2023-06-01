
import React, { Component } from "react";
import OAuth2 from './OAuth2';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>

        <OAuth2 />

      </header>
    </div>
  );
};

export default Popup;
