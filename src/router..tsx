import {createBrowserRouter, Navigate} from "react-router-dom";
import React from "react";

import {MainLayout} from "./layouts/mainLayout";
import {AccountPage, AuthPage, RegisterPage} from "./pages";
import {AuthRequired} from "./hoc/authRequired";



const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {
                index:true,element: <Navigate to={'user'}/>
            },
            {
                path: 'auth/register', element: <RegisterPage/>
            },
            {
                path: 'auth/log-in', element: <AuthPage/>
            },
            {
                path:'user',element:<AuthRequired><AccountPage/></AuthRequired>
            }

        ]
    }
])

export {
    router
}