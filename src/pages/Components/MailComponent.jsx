import React, { useEffect } from 'react';
import { createWindow } from '../Content/modules/closeWindow';
class Mail extends React.Component {

    render() {
        createWindow("https://mail.google.com/mail/u/0/#inbox", 500, 1200, 1250, 15)

        return (

            <div />
        );
    }
}

export default Mail;
