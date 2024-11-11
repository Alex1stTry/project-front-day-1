import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts/mainLayout";
import {RegisterPage} from "./pages/registerPage";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children:[
            {
                path:'auth/register', element:<RegisterPage/>
            }

        ]
    }
])

export {
    router
}