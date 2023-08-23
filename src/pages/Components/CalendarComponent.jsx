import React, { useEffect } from 'react';
import { createWindow } from '../Content/modules/closeWindow';
class Calendar extends React.Component {

    render() {
        createWindow("https://calendar.google.com/calendar/u/0/r", 800, 520, 0, 15, true, 'popup')

        return (

            <div />
        );
    }
}

export default Calendar;
