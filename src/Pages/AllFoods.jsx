import FoodCard from "../Components/FoodCard";
import { useEffect, useState } from "react";
import axios from 'axios'
import { Helmet } from "react-helmet-async";

const AllFoods = () => {
   
    const [foods, setFoods] = useState([]);
    useEffect(()=>{
        const getData = async ()=>{
            const {data}= await axios(`${import.meta.env.VITE_API_URL}/all-foods`)
            setFoods(data)
        }
        getData()

    },[])
     
    return (
        <div>
             <Helmet>
                <title>
                    Masala Manager | All Food
                </title>
            </Helmet>
            <div>
                <div data-aos="fade-up">
                    <h2 className="text-[#B18B5E] font-bold text-3xl md:text-5xl  text-center mb-10  w-3/4 mx-auto">Indulge in Flavorful Journeys, Every Bite Tells a Story!</h2>
                    <p className="text-lg px-3 md:w-3/4 mx-auto text-center mb-10 md:mt-10   mt-3">Savor culinary adventures with each dish, where every bite narrates a tale of flavor and tradition. From savory bites to decadent treats, our foods promise an unforgettable journey through the vibrant tapestry of taste</p>
                </div>
               
            </div>


            <div className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    foods.map(food =>
                        <FoodCard
                            key={food._id}
                            food={food}
                        ></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AllFoods;