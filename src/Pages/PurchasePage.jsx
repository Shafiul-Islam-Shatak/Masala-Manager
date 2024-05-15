import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const PurchasePage = () => {
    const food = useLoaderData()
    const navigate = useNavigate()
    const { food_name, price, category, origin, quantity, image, userName , stock_quantity , userEmail} = food;
    const { user } = useContext(AuthContext);
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let currentDate = (`${date}/${month}/${year}`)
    console.log(stock_quantity);

    // collect data from purchase form
    const hanldePurchase = e => {
        e.preventDefault();
        const form = e.target;
        const purchase_iteam = form.purchase_iteam.value;
        const purchase_date = form.date.value;
        const category = form.category.value;
        const iteam_price = parseInt(form.price.value);
        const order_quantity = parseInt(form.order_quantity.value);
        const total_pirce = iteam_price * order_quantity
        const origin = form.origin.value;
        const buyer_name = form.buyer_name.value;
        const buyer_email = form.buyer_email.value;
        const owner_name = userName;
        const food_photo = image;
        const purchasedFood = { purchase_iteam, purchase_date, category, iteam_price, total_pirce, order_quantity, origin, buyer_name, buyer_email, owner_name, food_photo };
        if(order_quantity > stock_quantity){
            toast.error(`You can't buy more than ${stock_quantity}`)
        }
        else if(buyer_email === userEmail){
            toast.error('You are the owner, You cannot but this iteam. Please buy another one')
            navigate(`/all-foods`)
        }
        else{

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
                    if (data.result) {
                        Swal.fire({
                            title: "Done",
                            text: "Purchase Completed",
                            icon: "success"
                        });
                        form.reset();
                    }
                })
        }


    }




    return (
        <div>
            <Helmet>
                <title>
                    Masala Manager | Purchase
                </title>
            </Helmet>
            <section className="w-3/4 mx-auto ">
                <h2 className="text-[#B18B5E] font-bold text-3xl md:text-5xl  text-center mb-10 mt-10 w-3/4 mx-auto">Purchase : {food_name}</h2>

                <form onSubmit={hanldePurchase}  >
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        {/* row 1 */}
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Iteam Name</label>
                            <input name="purchase_iteam" defaultValue={food_name} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Purchasing Date</label>
                            <input name="date" defaultValue={currentDate} readOnly type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        {/* row 2 */}
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Food Category</label>
                            <input name="category" defaultValue={category} readOnly type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />

                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Order Quantity <span className="text-sm text-red-500"> (max {quantity})</span></label>
                            <input name="order_quantity" type="number" defaultValue={1} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        {/* row 3 */}
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Price</label>
                            <input name="price" defaultValue={price} readOnly type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Food Origin(Country)</label>
                            <input name="origin" defaultValue={origin} readOnly type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        {/* Row 4 */}
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Buyer Name</label>
                            <input defaultValue={user?.displayName} readOnly name="buyer_name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200 font-semibold">Buyer Email</label>
                            <input defaultValue={user?.email} readOnly name="buyer_email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>



                    </div>

                    <div className="flex justify-end mt-6">
                        <button type="submit" className="px-8 w-full py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                            Confirm Purchase
                        </button>

                    </div>
                </form>
            </section>


        </div>
    );
};

export default PurchasePage;