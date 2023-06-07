import { createBrowserRouter } from "react-router-dom";
import Primary from '../layouts/Primary'
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Primary></Primary>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;