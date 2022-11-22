import React from 'react';

import { isEmpty } from 'lodash'
import Login from 'components/Login';
import { getItem } from 'store/localStorage';
import { Outlet } from 'react-router-dom';

const PrivateRouter = () => {
    const isAuthen = !isEmpty(getItem("USER"));
    console.log("private route", isAuthen)
    return (
        <React.Fragment>
            {isAuthen ?
                <div style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                    <header style={{ boxSizing: "border-box", height: 56, background: "#D6ECFF" }}>

                    </header>
                    <main style={{ flex: 1, display: "flex", flexDirection: "row" }}>
                        <nav style={{ width: "280px", background: "", borderRight: "1px solid #E6E6E6" }}>

                        </nav>
                        <main style={{ flex: 1 }}>
                            <Outlet />
                        </main>
                    </main>
                </div> :
                <Login />
            }
        </React.Fragment>
    )
}

export default PrivateRouter;