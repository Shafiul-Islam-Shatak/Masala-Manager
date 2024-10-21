import Banner from "../Components/Banner";
import { Helmet } from "react-helmet-async";
import TopSales from "../Components/TopSales";
import ComeResturent from "../Components/ComeResturent";
import { ScrollRestoration } from "react-router-dom";
import OurChefs from "../Components/OurChefs";
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Masala Manager | Home
                </title>
            </Helmet>
            <ScrollRestoration></ScrollRestoration>
            <Banner></Banner>
            <div>
                <ComeResturent></ComeResturent>
            </div>
            <div>
                <TopSales></TopSales>
            </div>
            <div className="mx-auto max-w-[1440px] flex justify-evenly flex-col md:flex-row w-3/4 bg-base-100 dark:bg-none items-center p-10">
                <h2 className="text-[#B18B5E] font-bold text-3xl md:text-5xl   w-3/4">Discover our All Food</h2>
                <Link to='/all-foods'>
                    <button className="btn border-none bg-orange-500 hover:bg-orange-300 text-black">Explore All Food
                    </button></Link>
            </div>
            <div><OurChefs></OurChefs></div>
        </div>
    );
};

export default Home;