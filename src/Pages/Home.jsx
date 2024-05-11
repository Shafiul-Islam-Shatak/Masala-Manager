import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div data-aos="fade-up">
                    <h2 className="text-[#B18B5E] font-bold text-3xl md:text-5xl  text-center mb-10 mt-10 w-3/4 mx-auto">Browse Our Categorys</h2>
                    <div className="w-3/4 mx-auto flex justify-evenly">
                        <Link>
                            <button className="btn  hover:bg-orange-600 bg-orange-300 text-black ">Japanese Delicacies</button>
                        </Link>
                        <Link>
                            <button className="btn  hover:bg-orange-600 bg-orange-300 text-black ">Thai Treats</button>
                        </Link>
                        <Link>
                            <button className="btn  hover:bg-orange-600 bg-orange-300 text-black ">Korean Cuisine</button>
                        </Link>
                        <Link>
                            <button className="btn  hover:bg-orange-600 bg-orange-300 text-black ">Indian Inspirations</button>
                        </Link>
                        <Link>
                            <button className="btn  hover:bg-orange-600 bg-orange-300 text-black ">Chinese Classics</button>
                        </Link>
                    </div>
                </div>
        </div>
    );
};

export default Home;