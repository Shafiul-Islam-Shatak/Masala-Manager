import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../Layout/Main";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AddFood from "../Pages/AddFood";
import FoodDetails from "../Pages/FoodDetails";
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
                path : '/add-food',
                element:<AddFood></AddFood>
                
            },
            {
                path: '/food/:id',
                element:<FoodDetails></FoodDetails>,
                loader : ({params})=> fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`)
            }
            
        ]
    },
]);

export default router;