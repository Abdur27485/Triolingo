import { createBrowserRouter } from "react-router-dom";
import Primary from '../layouts/Primary'
import Home from "../pages/Home";
import Instructors from "../pages/Instructors";

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
            }
        ]
    }
])

export default router;