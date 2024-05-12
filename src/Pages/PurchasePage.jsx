import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const PurchasePage = () => {
    const food = useLoaderData()
    const { food_name, price, category, origin } = food;
    const { user } = useContext(AuthContext);
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let currentDate = (`${date}/${month}/${year}`)
    console.log(currentDate);

    // collect data from purchase form
    const hanldePurchase = e => {
        e.preventDefault();
        const form = e.target;
        const purchase_iteam = form.purchase_iteam.value;
        const purchase_date = form.date.value;
        const category = form.category.value;
        const iteam_price = form.price.value;
        const quantity = form.quantity.value;
        const total_pirce = iteam_price * quantity
        const origin = form.origin.value;
        const purchasedFood = { purchase_iteam, purchase_date, category, iteam_price, total_pirce, quantity, origin }


        // post data to backend
        fetch(`${import.meta.env.VITE_API_URL}/purchases`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchasedFood)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Congratulation !!",
                        text: "Succesfully Craft Added",
                        icon: "success"
                    });
                    form.reset();
                }
            })
    }




    return (
        <div>
            <section className="w-3/4 mx-auto ">
                <h2 className="text-[#B18B5E] font-bold text-3xl md:text-5xl  text-center mb-10 mt-10 w-3/4 mx-auto">Purchase : {food_name}</h2>

                <form onSubmit={hanldePurchase}  >
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        {/* row 1 */}
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Iteam Name</label>
                            <input name="purchase_iteam" value={food_name} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Purchasing Date</label>
                            <input name="date" value={currentDate} readOnly type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        {/* row 2 */}
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Food Category</label>
                            <input name="category" value={category} readOnly type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />

                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Food Quantity</label>
                            <input name="quantity" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        {/* row 3 */}
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Price</label>
                            <input name="price" value={price} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Food Origin(Country)</label>
                            <input name="origin" value={origin} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        {/* Row 4 */}
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Buyer Name</label>
                            <input value={user?.displayName} name="buyer_name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Buyer Email</label>
                            <input value={user?.email} readOnly name="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>



                    </div>

                    <div className="flex justify-end mt-6">
                        <input type="submit" value="Confirm Purchase" className="px-8 w-full py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />

                    </div>
                </form>
            </section>


        </div>
    );
};

export default PurchasePage;