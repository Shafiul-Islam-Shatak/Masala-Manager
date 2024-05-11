import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import { IoEyeOffSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";



const Login = () => {
    const { googleLogin, githubLogin, logIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState([])
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogIn = e => {
        setShowPassword('')
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        logIn(email, password)
            .then(result => {
                console.log(result.user);
                toast("Log in succesfull !");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
                toast("Log in faild ! please check your email and password")
            })
    }
    const handleSocialLogIn = (socialProvider) => {
        socialProvider().then((result) => {
            toast("Log in succesfull !");
            if (result.user) {
                navigate(location?.state ? location.state : '/')
            }
        })
    }


    return (
        <div>
            <Helmet>
                <title>
                    Masala Manager | Login
                </title>
            </Helmet>

            <div>
                <div>
                    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
                        <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246055.jpg?t=st=1715404575~exp=1715408175~hmac=aefde548b9f0241d6ae130def7df4fa8349c4ed31419b8a60ebaa3be44e325f9&w=740')" }}></div>

                        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                            <div className="flex justify-center mx-auto">
                                <img className="w-20" src="/resources/logo.png" alt="" />
                            </div>

                            <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                                Welcome back!
                            </p>

                            <button onClick={() => handleSocialLogIn(googleLogin)} className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 w-full">
                                <div className="px-4 py-2"  >
                                    <FcGoogle></FcGoogle>
                                </div>
                                <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                            </button>
                            <button onClick={() => handleSocialLogIn(githubLogin)} className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 w-full">
                                <div className="px-4 py-2"  >
                                    <FaGithub></FaGithub>
                                </div>
                                <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Github</span>
                            </button>

                            <div className="flex items-center justify-between mt-4">
                                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                                <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login with email</a>

                                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                            </div>

                            <div>
                                <form onSubmit={handleLogIn}>
                                    <div className="mt-4">
                                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Email Address</label>
                                        <input name='email' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                                    </div>

                                    <div className="mt-4">
                                        <div className="flex justify-between">
                                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Password</label>
                                            <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
                                        </div>
                                        <div className='flex items-center'>

                                            <input name='password' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                                            {
                                                showPassword ?
                                                    <IoEyeOffSharp onClick={() => { setShowPassword(!showPassword) }} className="-ml-7"></IoEyeOffSharp> :
                                                    <FaEye onClick={() => { setShowPassword(!showPassword) }} className="-ml-7"></FaEye>
                                            }
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <input className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50" type="submit" value="Sign In" />

                                    </div>

                                </form>
                            </div>


                            <div className="flex items-center justify-between mt-4">
                                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                                <Link to='/reg' className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</Link>

                                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;