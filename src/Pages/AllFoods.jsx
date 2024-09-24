import FoodCard from "../Components/FoodCard";
import { useEffect, useState } from "react";
import axios from 'axios'
import { Helmet } from "react-helmet-async";

const AllFoods = () => {

    const [foods, setFoods] = useState([]);
    const [search, setSearch] = useState('');
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/all-foods?search=${search}`)
            setFoods(data)
        }
        getData()

    }, [search])

    const handleClearSearch = ()=>{
        setSearchText('')
        setSearch('')
    }

    const handleSearch = e => {
        e.preventDefault();
        setSearch(searchText)
    }
    console.log(search);

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
                <div data-aos="fade-up flex">
                    <h2 className="text-[#B18B5E] font-bold text-3xl md:text-5xl  text-center mb-10  w-3/4 mx-auto">Search Your Food</h2>
                    <form onSubmit={handleSearch} className="mb-10 mx-auto ">
                        <div className="flex justify-center items-center">
                        <label className="input  input-bordered w-90 md:w-96 flex items-center gap-2">
                            <input type="text" className="grow" name="search" placeholder="Search"
                            onChange={(e)=>setSearchText(e.target.value)}
                            value={searchText} />

                            <button type="submit" className="btn border-none bg-orange-400 -mr-4 text-black ">Search</button>
                        </label>
                            <button onClick={handleClearSearch} className="btn border-none bg-orange-400 -mr-4 text-black ml-5 ">Clear Search</button>
                        </div>
                    </form>
                </div>

            </div>



            <div className="w-3/4 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
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