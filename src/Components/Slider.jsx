import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const Slider = ({ image, text }) => {
    return (
        <div
            className='w-full bg-center bg-cover h-[38rem] rounded-2xl'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/70 rounded-2xl'>
                <div className='text-center'>
                    <h1 className='text-2xl font-semibold text-gray-300 lg:text-2xl mx-auto w-3/4'>
                        {text}
                    </h1>
                    <br />
                    <Link to='/all-foods' className='w-full px-5 py-4 mt-4 text-sm  font-medium '>
                    <button className="btn btn-outline hover:bg-orange-600 btn-orange-300 text-orange-300 ">All Food</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
Slider.propTypes = {
    image: PropTypes.object.isRequired,
    text: PropTypes.object.isRequired
}

export default Slider;