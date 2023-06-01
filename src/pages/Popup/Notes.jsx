import React, { useEffect } from 'react';

class Notes extends React.Component {

    render() {
        chrome.windows.create({
            url: 'https://www.amplenote.com/notes',
            type: 'popup',
            width: 500,
            height: 600,
            left: 500,
            top: 10
        });
        return (

            <div />
        );
    }
}

export default Notes;
