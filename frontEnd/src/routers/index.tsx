import React from 'react';

import { createBrowserRouter } from "react-router-dom";

import PublicRouter from 'routers/Public';
import PrivateRouter from 'routers/Private';
import AppLayout from 'layouts/AppLayout';
import Login from 'components/Login'
import Statistic from 'components/Statistic'

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: (<AppLayout />),
        children: [
            {
                path: "/",
                element: <PrivateRouter />,
                children: [
                    {
                        path: "/statistic",
                        element: <Statistic />
                    },
                    {
                        path: "/onboarding",
                        element: (
                            <div>
                                onboarding
                            </div>
                        )
                    },
                    {
                        path: "/merchant",
                        element: (
                            <div>
                                merchant
                            </div>
                        )
                    },
                    {
                        path: "/stores",
                        element: (
                            <div>
                                stores
                            </div>
                        )
                    },
                    {
                        path: "/task",
                        element: (
                            <div>
                                task
                            </div>
                        )
                    },
                ]
            },
            {
                path: "/",
                element: <PublicRouter />,
                children: [
                    {
                        path: "login",
                        element: <Login />,
                    },
                    {
                        path: "signup",
                        element: <div>
                            signup
                        </div>,
                    },
                ],
            },
        ],
    },

])

export default appRouter;
