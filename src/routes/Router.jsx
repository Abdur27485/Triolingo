import { createBrowserRouter } from "react-router-dom";
import Primary from '../layouts/Primary'
import Home from "../pages/Home";
import Instructors from "../pages/Instructors";
import Classes from "../pages/Classes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard";
import ManageClasses from "../pages/ManageClasses";
import ManageUsers from "../pages/ManageUsers";
import NotFound from "../pages/NotFound";
import AddClass from "../pages/AddClass";
import MyClasses from "../pages/MyClasses";

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
                element: <PrivateRoute><Classes></Classes></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                children: [
                    {
                        path: 'manageClasses',
                        element: <ManageClasses></ManageClasses>
                    },
                    {
                        path: 'manageUsers',
                        element: <ManageUsers></ManageUsers>
                    },
                    {
                        path:'addClass',
                        element: <AddClass></AddClass>
                    },
                    {
                        path: 'myClasses',
                        element: <MyClasses></MyClasses>
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default router;