import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Terminal.css';
import './Terminal.scss';
import { runScriptOnWindow } from '../Content/modules/closeWindow';
function getAmplenoteToken() {
  console.log("getAmplenoteToken start")
  const element = document.querySelector('div[data-react-class="NoteEditorApp"]');
  const reactProps = element.getAttribute('data-react-props');
  const item = JSON.parse(reactProps);
  localStorage.setItem('test-adourish', "test");
  console.log(item)
  if (item && item.api && item.api.accessToken) {
    localStorage.setItem('amplenoteToken', item.api.accessToken);

    console.log("getAmplenoteToken end", item.api.accessToken);
    return item.api.accessToken;
  }
}
const Terminal = () => {
  runScriptOnWindow("amplenoteToken", "https://www.amplenote.com/notes", getAmplenoteToken);
  return (
    <div className="App">
      <header className="App-header">

        terminal
      </header>
    </div>
  );
};

export default Terminal;
