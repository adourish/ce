import React, { useEffect } from 'react';
import { createWindow } from '../Content/modules/closeWindow';
class Mail extends React.Component {

    render() {
        createWindow("https://mail.google.com/mail/u/0/#inbox", 1000, 1200, 750, 15)

        return (

            <div />
        );
    }
}

export default Mail;
