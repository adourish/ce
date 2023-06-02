import React, { useEffect } from 'react';

class Notes extends React.Component {

    render() {
        chrome.windows.create({
            url: 'https://www.amplenote.com/notes',
            type: 'popup',
            focused: false,
            width: 500,
            height: 600,
            left: 1280,
            top: 15
        });
        return (

            <div />
        );
    }
}

export default Notes;
