import { useEffect, useState } from "react";
import axios from 'axios'
import TopFoodCard from "./TopFoodCard";

const TopSales = () => {
    const [topFoods, setTopFoods] = useState([]);
    console.log(topFoods);
    useEffect(()=>{
        const getData = async ()=>{
            const {data}= await axios(`${import.meta.env.VITE_API_URL}/top-foods`)
            setTopFoods(data)
        }
        getData()

    },[])

    return (
        <div className="my-16">

            <div>
                <div data-aos="fade-up">
                    <h2 className="text-[#B18B5E] font-bold text-3xl md:text-5xl  text-center mb-10  w-3/4 mx-auto">Our Top Selling Iteam</h2>
                    <p className="text-lg px-3 md:w-3/4 mx-auto text-center mb-10 md:mt-10   mt-3">Discover our top-selling foods, curated for your satisfaction. Indulge in flavors that captivate, from classics to innovations. Elevate your culinary experience with our finest selections</p>
                </div>
            </div>

            <div className="w-3/4 mx-auto grid grid-cols-1 my-10 lg:grid-cols-3 gap-5">
                {
                    topFoods.slice(0,6).map(topFood=><TopFoodCard
                    topFood={topFood}
                    key={topFood._id}
                    ></TopFoodCard>)
                }
            </div>

        </div>
    );
};

export default TopSales;