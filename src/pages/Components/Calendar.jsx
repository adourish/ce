import React, { useEffect } from 'react';
import { closeWindow, createWindow } from '../Content/modules/closeWindow';
class Calendar extends React.Component {

    render() {
        createWindow("https://calendar.google.com/calendar/u/0/r", 800, 600, 0, 15)

        return (

            <div />
        );
    }
}

export default Calendar;
