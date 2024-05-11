import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import { ToastContainer } from "react-toastify";


const Main = () => {
    return (
        <div>
            <ToastContainer></ToastContainer>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;