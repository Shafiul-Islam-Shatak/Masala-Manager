import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../Layout/Main";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";
import Login from "../Pages/Login";
import MrkLogin from '../Pages/MrkLogin'
import Registration from "../Pages/Registration";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children : [
            {
                path : '/',
                element :<Home></Home>
            },
            {
                path : '/all-foods',
                element :<AllFoods></AllFoods>
            },
            {
                path : '/gallery',
                element : <Gallery></Gallery>
            },
            {
                path : '/login',
                element :<Login></Login>
            },
            {
                path: '/reg',
                element : <Registration></Registration>
            },
            {
                path: '/test',
                element :<MrkLogin></MrkLogin>
            }
        ]
    },
]);

export default router;