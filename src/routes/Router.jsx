import { createBrowserRouter } from "react-router-dom";
import Primary from '../layouts/Primary'
import Home from "../pages/Home";
import Instructors from "../pages/Instructors";
import Classes from "../pages/Classes";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Primary></Primary>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;