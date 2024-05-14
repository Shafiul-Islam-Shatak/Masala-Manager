import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const FoodDetails = () => {
    const food = useLoaderData()
    const { food_name, image, userName, userEmail, description, price, category, stock_quantity, origin, _id , owner_image , sale_quantity} = food;


    return (
        <section className="bg-white dark:bg-gray-900">
             <Helmet>
                <title>
                    Masala Manager | Food Details
                </title>
            </Helmet>
            <div className="container px-6 py-10 mx-auto">
                <h2 className=" font-bold text-3xl md:text-5xl  text-center mb-10 mt-10 w-3/4 mx-auto">{food_name}</h2>


                <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                    <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={image} alt="" />

                    <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">

                        <p className="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white">
                            Price : ${price}
                        </p>
                        <p className="inline-block mt-2 font-semibold">Available : Only {stock_quantity} Pcs</p>

                        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                            Details : {description}
                        </p>
                        <p className="text-sm  uppercase mt-5 font-semibold">category : {category}</p>
                        <p className="text-sm  uppercase mt-2 font-semibold">origin : {origin}</p>
                        <p className="inline-block uppercase mt-2 font-semibold">This iteam already sold {sale_quantity} Pcs</p>
                        <div className="flex my-10 items-center space-x-3">
                            <div>
                                <div className="w-16 mask mask-squircle">
                                    <img src={owner_image} />
                                </div>
                            </div>

                            <div>
                                <h1 className="text-sm text-gray-700 dark:text-gray-200 mt-5">Made By : {userName}</h1>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Contact : {userEmail}</p>
                            </div>
                        </div>
                        <Link to={`/purchase/${_id}`}>
                            <button className="btn btn-block  hover:bg-orange-600 bg-orange-300 text-black mt-5">Purchase</button>
                        </Link>

                    </div>
                </div>

            </div>
        </section>

    );
};

export default FoodDetails;