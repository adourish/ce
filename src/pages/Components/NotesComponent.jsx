import React, { useEffect } from 'react';
import { createWindow } from '../Content/modules/closeWindow';
class Notes extends React.Component {

    render() {
        createWindow("https://www.amplenote.com/notes", 1000, 430, 750, 550, true)

        return (

            <div />
        );
    }
}

export default Notes;
