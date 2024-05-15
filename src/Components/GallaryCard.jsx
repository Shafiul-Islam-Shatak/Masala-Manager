import PropTypes from 'prop-types';

const GallaryCard = ({feedbackss}) => {
    const {reviwer_name, review_iamge, feedback} = feedbackss;
    return (
        <div>
            <div className="relative group flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <div className="relative w-full  overflow-hidden rounded-lg shadow-md group-hover:opacity-100">
                        <img className="w-80 md:w-96 rounded-lg object-cover" src={review_iamge} alt="Nike Revolt" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="px-5">
                            <h1 className="text-white text-2xl font-semibold">{reviwer_name}</h1>
                            <h1 className="text-white font-semibold mt-5">{feedback}</h1>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
};

GallaryCard.propTypes = {
    feedbackss: PropTypes.object.isRequired
}

export default GallaryCard;