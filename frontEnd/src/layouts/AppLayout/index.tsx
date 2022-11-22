import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = (props) => {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    )
}

export default AppLayout;