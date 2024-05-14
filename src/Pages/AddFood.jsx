import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";


const AddFood = () => {
    const { user } = useContext(AuthContext);
    const hanldeAddFood = e => {
        e.preventDefault();
        const form = e.target;
        const food_name = form.food_name.value;
        const category = form.category.value;
        const image = form.food_photo.value;
        const price =  parseInt( form.price.value);
        const stock_quantity = parseInt( form.stock_quantity.value);
        const origin = form.origin.value;
        const userName = form.username.value;
        const userEmail = form.email.value;
        const description = form.description.value;
        let sale_quantity = 0;
        const owner_image = user?.photoURL

        const food = { food_name, category, image, price, stock_quantity,origin,  userName, userEmail, description , sale_quantity , owner_image };
        console.log(food);

        // post data to backend
        fetch(`${import.meta.env.VITE_API_URL}/all-foods`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(food),

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Congratulation !!",
                        text: "Food Added",
                        icon: "success"
                    });
                    form.reset();
                }
            })
    }
    return (
        <div>
             <Helmet>
                <title>
                    Masala Manager | Add Food
                </title>
            </Helmet>
            <section className="w-3/4 mx-auto ">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add a Delicious Food</h2>

                <form  onSubmit={hanldeAddFood}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        {/* row 1 */}
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Food Name</label>
                            <input name="food_name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Food Iamge</label>
                            <input name="food_photo" type="url" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        {/* row 2 */}
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Food Category</label>
                            <select name="category" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                <option value="Japanese_Delicacies">Japanese Delicacies</option>
                                <option value="Thai_Treats">Thai Treats</option>
                                <option value="Korean_Cuisine">Korean Cuisine</option>
                                <option value="Indian_Inspirations">Indian Inspirations</option>
                                <option value="Chinese_Classics">Chinese Classics</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Stock Quantity</label>
                            <input name="stock_quantity" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        {/* row 3 */}
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Price</label>
                            <input name="price" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Food Origin(Country)</label>
                            <input name="origin" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        {/* Row 4 */}
                        <div>
                            <label  className="text-gray-700 dark:text-gray-200 font-semibold">Added By</label>
                            <input defaultValue={user?.displayName} readOnly name="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label  className="text-gray-700 dark:text-gray-200 font-semibold">Email Address</label>
                            <input defaultValue={user?.email} readOnly name="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div className="col-span-2">
                            <label  className="text-gray-700 dark:text-gray-200 font-semibold">Description</label>
                            
                            <input name="description" type="text" placeholder="ingredients, making procedure, etc" className=" textarea textarea-bordered textarea-lg w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>


                    </div>

                    <div className="flex justify-end mt-6">
                        <input type="submit" value="Add Food" className="px-8 w-full py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />

                    </div>
                </form>
            </section>


        </div>
    );
};

export default AddFood;