import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const TopFoodCard = ({ topFood }) => {
    const { food_name, image, _id, price, sale_quantity } = topFood;

    return (
        <div data-aos="zoom-in" className="card  mx-auto max-w-72 lg:max-w-80 lg:hover:scale-105 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{food_name}</h1>
                <p className="mt-1  text-xl font-bold text-gray-600 dark:text-gray-400">$ {price}</p>
            </div>

            <img className="object-cover  mt-2" src={image} alt={food_name} />

            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-lg font-bold text-white">Alredy {sale_quantity} Sold</h1>
                <Link to={`/food/${_id}`} >
                    <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">View Details</button>
                </Link>
            </div>
        </div>

    );
};
TopFoodCard.propTypes = {
    topFood: PropTypes.object.isRequired
}
export default TopFoodCard;