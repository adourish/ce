import React, { useEffect } from 'react';
import { createWindow } from '../Content/modules/closeWindow';
class ChatGPT extends React.Component {

    render() {
        createWindow("https://chat.openai.com/", 800, 430, 0, 615)

        return (
            <div />
        );
    }

}

export default ChatGPT;

