import React from 'react';
import { Outlet } from 'react-router-dom'

const PublicRouter = () => {
    console.log("PublicRouter route")
    return (<Outlet />)
}

export default PublicRouter;