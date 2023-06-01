import React, { useEffect } from 'react';

class ChatGPT extends React.Component {

    render() {
        chrome.windows.create({
            url: 'https://chat.openai.com',
            type: 'popup',
            width: 500,
            height: 600,
            left: 0,
            top: 10
        });
        return (
            <div />
        );
    }

}

export default ChatGPT;

