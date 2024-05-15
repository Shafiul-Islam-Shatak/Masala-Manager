import { Link } from "react-router-dom";
import RectangleImage from "./RectangleImage";

const ComeResturent = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800 w-3/4
        mx-auto mt-10 lg:mt-20">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <RectangleImage></RectangleImage>
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold leading-none sm:text-6xl">
                    Come to Our Restaurant, Ready Your Food.
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                       Explore Us , Find Your Self In Our Gallery
                    </p>
                    <Link to='/gallery' className='w-full px-5 py-4 mt-4 text-sm  font-medium '>
                    <button className="btn border-none bg-orange-400 hover:bg-orange-300 text-black ">Explore Us</button>
                    </Link>
                    
                </div>
            </div>
        </section>
    );
};

export default ComeResturent;