import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Aos from "aos";


const Main = () => {
    useEffect(() => {
        Aos.init({
          duration : 1000
        });
      }, []);
    return (
        <div>
            <Toaster></Toaster>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;