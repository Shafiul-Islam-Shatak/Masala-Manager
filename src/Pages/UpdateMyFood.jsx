import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateMyFood = () => {
    const food = useLoaderData()
    const { food_name, image, price, category, origin, quantity, _id , description} = food;
    const { user } = useContext(AuthContext);


    const hanldeEdit = e => {
        e.preventDefault();
        const form = e.target;
        const food_name = form.food_name.value;
        const category = form.category.value;
        const image = form.food_photo.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const origin = form.origin.value;
        const userName = form.username.value;
        const userEmail = form.email.value;
        const description = form.description.value;

        const updatedfood = { food_name, category, image, price, quantity,origin,  userName, userEmail, description };
        console.log(updatedfood);


        // post data to backend
        fetch(`${import.meta.env.VITE_API_URL}/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedfood)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Done",
                        text: "Updated",
                        icon: "success"
                    });
                    form.reset();
                }
            })
    }

    return (
        <div>
            <section className="w-3/4 mx-auto ">
                <h2 className="text-[#B18B5E] font-bold text-3xl md:text-5xl  text-center mb-10 mt-10 w-3/4 mx-auto">Update : {food_name}</h2>

                <form  onSubmit={hanldeEdit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        {/* row 1 */}
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Food Name</label>
                            <input name="food_name" defaultValue={food_name} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Food Iamge</label>
                            <input name="food_photo" defaultValue={image} type="url" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        {/* row 2 */}
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Food Category</label>
                            <select name="category" defaultValue={category} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                <option value="Japanese_Delicacies">Japanese Delicacies</option>
                                <option value="Thai_Treats">Thai Treats</option>
                                <option value="Korean_Cuisine">Korean Cuisine</option>
                                <option value="Indian_Inspirations">Indian Inspirations</option>
                                <option value="Chinese_Classics">Chinese Classics</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Food Quantity</label>
                            <input name="quantity" defaultValue={quantity} type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        {/* row 3 */}
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Price</label>
                            <input name="price" defaultValue={price} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Food Origin(Country)</label>
                            <input name="origin" defaultValue={origin} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
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
                            
                            <input name="description" defaultValue={description} type="text" placeholder="ingredients, making procedure, etc" className=" textarea textarea-bordered textarea-lg w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>


                    </div>

                    <div className="flex justify-end mt-6">
                        <input type="submit" value="Update Food" className="px-8 w-full py-2.5 mb-10 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />

                    </div>
                </form>
            </section>


        </div>
    );
};

export default UpdateMyFood;