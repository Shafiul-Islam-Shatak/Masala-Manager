import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


const FoodCard = ({food}) => {
    const {food_name, image , _id,  price, category, stock_quantity}= food;
    return (
        <div>
            <Helmet>
                <title>
                    Masala Manager | All-foods
                </title>
            </Helmet>
            <div className="card w-80 mx-auto md:w-96 h-[450px] bg-base-100 shadow-xl lg:hover:scale-105 hover:drop-shadow-2xl">
                <figure className="px-5 pt-5">
                    <img src={image} alt="Shoes" className="rounded-2xl " />
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title">{food_name}</h2>
                    <p >In Stock : {stock_quantity}</p>
                    <div>
                      <h2>Price : $ {price}</h2> 
                      <h2>Category : {category}</h2> 
                        
                    </div>
                    <div className="card-actions w-full">
                        <Link to={`/food/${_id}`} className='w-full'>
                        <button className="btn  hover:bg-orange-600 bg-orange-300 text-black w-full">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
FoodCard.propTypes = {
    food: PropTypes.object.isRequired
}

export default FoodCard;