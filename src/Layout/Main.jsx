import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import { Toaster } from "react-hot-toast";


const Main = () => {
    return (
        <div>
            <Toaster></Toaster>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;