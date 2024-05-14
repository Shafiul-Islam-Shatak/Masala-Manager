import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import axios from 'axios'
import GallaryCard from "../Components/GallaryCard";
import { Helmet } from "react-helmet-async";

const Gallery = () => {
    const [feedbacks, setFeedbacks] = useState([])
    const { user } = useContext(AuthContext)
    const hanldeAddFeedBack = e => {
        e.preventDefault();
        const form = e.target;
        const reviwer_name = user?.displayName;
        const review_iamge = form.review_iamge.value;
        const feedback = form.feedback.value;
        const review = { reviwer_name, review_iamge, feedback }
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
                    const newFeedback = [...feedbacks, review]
                    setFeedbacks(newFeedback)
                }
            })
    }

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/feedbacks`)
            setFeedbacks(data)
        }
        getData()

    }, [])

    console.log(feedbacks);
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151431678.jpg?t=st=1715510852~exp=1715514452~hmac=43587f936343406381eac567bf4e46602240dc08774108600d4b7d07237a79a7&w=900)' }}>
             <Helmet>
                <title>
                    Masala Manager | Gallery
                </title>
            </Helmet>
            <div className="hero-overlay bg-opacity-60" > </div>
            <div className="w-3/4">
                <div className="bg-transparent">
                    <div className="hero-content flex-col lg:flex-row">
                        <img  src="https://img.freepik.com/free-photo/full-shot-smiley-woman-with-smartphone_23-2149394418.jpg?t=st=1715531639~exp=1715535239~hmac=3a09e972d102a14ea20b0f0a4ce1dd01cbd2d1a59fa40fd2b1d6194592868ca7&w=900" className="w-80 md:w-96 rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl text-white font-bold">Our Honorable Clients Feedback</h1>
                            <p className="py-6 text-white">Dive into the feedback from our esteemed clients, showcasing their valuable testimonials and insights. Discover how our products and services have made a positive impact on their experiences. Join us in celebrating their satisfaction and loyalty as we continue to strive for excellence.</p>
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn mt-10 hover:bg-orange-600 bg-orange-300 text-black w-1/2">Add Your Feedback</button>
                        </div>
                    </div>
                </div>
                <h2 className="text-white font-bold text-3xl md:text-5xl  text-center mb-10 mt-10 w-3/4 mx-auto">Take a Look about Ourself</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        feedbacks.map(feedback =>
                            <GallaryCard
                                key={feedback._id}
                                feedbackss={feedback}
                            ></GallaryCard>)
                    }

                </div>

                
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
                                        <label className="text-gray-700 dark:text-gray-200" >Image URL</label>
                                        <input required name="review_iamge" type="url" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    <div className="w-full">
                                        <label className="text-gray-700 dark:text-gray-200">FeedBack</label>
                                        <textarea required name="feedback" type="text" className="block w-[300px] md:w-[415px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
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