import React, { useEffect } from 'react';
import { createWindow } from '../Content/modules/closeWindow';
class Tasks extends React.Component {

    render() {
        createWindow("https://todoist.com/app/project/2149072136", 500, 1200, 750, 15, true, 'popup')

        return (

            <div />
        );
    }
}

export default Tasks;
