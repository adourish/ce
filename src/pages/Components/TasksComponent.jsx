import React, { useEffect } from 'react';
import { createWindow } from '../Content/modules/closeWindow';
class Tasks extends React.Component {

    render() {
        createWindow("https://todoist.com/app/project/2149072136", 500, 580, 790, 15)

        return (

            <div />
        );
    }
}

export default Tasks;
