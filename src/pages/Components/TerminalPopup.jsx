import React, { useEffect } from 'react';
import { createWindow } from '../Content/modules/closeWindow';
class TerminalPopup extends React.Component {

    render() {
        var url = "chrome-extension://" + chrome.runtime.id + "/terminal.html";
        console.log("TerminalPopup", url)
        createWindow(url, 800, 430, 800, 615)

        return (

            <div />
        );
    }
}

export default TerminalPopup;
