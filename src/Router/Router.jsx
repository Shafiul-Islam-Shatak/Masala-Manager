import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../Layout/Main";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AddFood from "../Pages/AddFood";
import FoodDetails from "../Pages/FoodDetails";
import PurchasePage from "../Pages/PurchasePage";
import ErrorPage from "../Pages/ErrorPage";
import MyFood from "../Pages/MyFood";
import PrivateRouter from "./PrivateRouter";
import UpdateMyFood from "../Pages/UpdateMyFood";
import MyOrderList from "../Pages/MyOrderList";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
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
            },
            {
                path: '/purchase/:id',
                element:<PrivateRouter><PurchasePage></PurchasePage></PrivateRouter>,
                loader : ({params})=> fetch(`${import.meta.env.VITE_API_URL}/purchase/${params.id}`)
            },
            {
                path: '/update/:id',
                element:<UpdateMyFood></UpdateMyFood>,
                loader : ({params})=> fetch(`${import.meta.env.VITE_API_URL}/update/${params.id}`)
            },
            {
                path :'/my-foods/:email',
                element : <MyFood></MyFood>,
                loader : ({params})=> fetch(`${import.meta.env.VITE_API_URL}/my-foods/${params.email}`)
            },
            {
                path :'/my-purchases/:email',
                element : <MyOrderList></MyOrderList>,
                loader : ({params})=> fetch(`${import.meta.env.VITE_API_URL}/my-purchases/${params.email}`)
            }

            
        ]
    },
]);

export default router;