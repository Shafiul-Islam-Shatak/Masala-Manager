import { useLoaderData } from "react-router-dom";
import FoodCard from "../Components/FoodCard";

const AllFoods = () => {
    const foods = useLoaderData()
    console.log(foods);
    return (
        <div>
            Our Food collection is {foods.length}

            <div className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    foods.map(food=>
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