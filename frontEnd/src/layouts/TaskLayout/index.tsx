import React from 'react';
import { Outlet } from 'react-router-dom';

const TaskLayout = (props) => {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ display: "flex", flexDirection: "row", width: "100%", height: "100%", maxWidth: "80%", maxHeight: "75%", margin: "0 auto" }}>
                <div style={{ flex: 1, }}>

                </div>
                <div style={{ flex: 1, width: "100%" }}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default TaskLayout;