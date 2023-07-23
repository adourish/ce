import React, { useEffect } from 'react';
import { createWindow } from '../Content/modules/closeWindow';
class Chat extends React.Component {

    render() {
        createWindow("https://mail.google.com/chat/u/0/#chat/dm/vt8gbgAAAAE", 500, 1200, 1250, 15, false, 'popup')
        createWindow("https://messages.google.com/web/conversations/925", 500, 1200, 1250, 15, false, 'popup')
        return (

            <div />
        );
    }
}

export default Chat;
