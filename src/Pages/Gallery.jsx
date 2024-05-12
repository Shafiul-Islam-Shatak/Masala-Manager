import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Gallery = () => {
    const { user } = useContext(AuthContext)
    const hanldeAddFeedBack = e => {
        e.preventDefault();
        const form = e.target;
        const reviwer_name = user?.displayName
        const reviwer_email = user?.email
        const feedback = form.feedback.value;
        const review = { reviwer_name, reviwer_email, feedback }
        console.log(review);

        // post data to backend
        fetch(`${import.meta.env.VITE_API_URL}/feedbacks`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Feedback Done')
                    form.reset();
                }
            })
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151431678.jpg?t=st=1715510852~exp=1715514452~hmac=43587f936343406381eac567bf4e46602240dc08774108600d4b7d07237a79a7&w=900)' }}>
            <div className="hero-overlay bg-opacity-60" > </div>
            <div className="w-3/4">
                {/* card */}
                <div className="relative group flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-md group-hover:opacity-100">
                        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="Nike Revolt" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white font-semibold">Nike Revolt</p>
                        </div>
                    </div>
                </div>

                <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn mt-10 hover:bg-orange-600 bg-orange-300 text-black w-full">Add</button>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Please Gives us Your Valuable Feedback</h2>

                            <form onSubmit={hanldeAddFeedBack}>
                                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200">Your Name</label>
                                        <input name="reviwer_name" defaultValue={user?.displayName} readOnly type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" >Email Address</label>
                                        <input name="reviwer_email" defaultValue={user?.email} readOnly type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    <div className="w-full">
                                        <label className="text-gray-700 dark:text-gray-200">FeedBack</label>
                                        <textarea name="feedback" type="text" className="block w-[300px] md:w-[415px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>
                                </div>
                                <button onClick={() => document.getElementById('my_modal_5').close()} type="submit" className="mt-8 w-full btn block px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                            </form>
                            
                        </section>

                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Gallery;