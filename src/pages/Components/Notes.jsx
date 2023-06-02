import React, { useEffect } from 'react';
import { createWindow } from '../Content/modules/closeWindow';
class Notes extends React.Component {

    render() {
        createWindow("https://www.amplenote.com/notes", 500, 600, 1280, 15)

        return (

            <div />
        );
    }
}

export default Notes;
