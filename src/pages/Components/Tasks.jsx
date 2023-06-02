import React, { useEffect } from 'react';

class Tasks extends React.Component {

    render() {
        chrome.windows.create({
            url: 'https://todoist.com/app/project/2149072136',
            type: 'popup',
            focused: false,
            width: 500,
            height: 600,
            left: 790,
            top: 15
        });
        return (

            <div />
        );
    }
}

export default Tasks;
