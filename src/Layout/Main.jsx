import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../Components/Footer";


const Main = () => {
    useEffect(() => {
        AOS.init({
          duration : 500
        });
      }, []);
    return (
        <div>
            <Toaster></Toaster>
            <div className="sticky  top-0 left-0 z-[1000]  ">
            <Navber></Navber>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;