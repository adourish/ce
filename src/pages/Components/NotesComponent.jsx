import React, { useEffect } from 'react';
import { createWindow } from '../Content/modules/closeWindow';
class Notes extends React.Component {

    render() {

        createWindow("https://www.amplenote.com/notes", 1600, 1260, 0, 15, true, 'popup')

        return (

            <div />
        );
    }
}

export default Notes;
