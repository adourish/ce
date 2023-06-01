import React, { useEffect } from 'react';

class Calendar extends React.Component {

    render() {
        chrome.windows.create({
            url: 'https://calendar.google.com/calendar/u/0/r',
            type: 'popup',
            width: 800,
            height: 600,
            left: 1000,
            top: 10
        });
        return (

            <div />
        );
    }
}

export default Calendar;
