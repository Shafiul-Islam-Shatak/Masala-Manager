import Banner from "../Components/Banner";
import { Helmet } from "react-helmet-async";
import TopSales from "../Components/TopSales";
import ComeResturent from "../Components/ComeResturent";
import { ScrollRestoration } from "react-router-dom";
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
        </div>
    );
};

export default Home;