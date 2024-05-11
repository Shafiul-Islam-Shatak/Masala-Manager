import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';


const FoodCard = ({food}) => {
    const {food_name, image}= food;
    return (
        <div>
            <Helmet>
                <title>
                    Masala Manager | All-foods
                </title>
            </Helmet>
            <div className="card w-96 h-[450px] bg-base-100 shadow-xl hover:scale-105 hover:drop-shadow-2xl">
                <figure className="px-5 pt-5">
                    <img src={image} alt="Shoes" className="rounded-2xl " />
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title">{food_name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions w-full">
                        <button className="btn  hover:bg-orange-600 bg-orange-300 text-black w-full">Buy Now</button>
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