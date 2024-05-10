import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import { IoEyeOffSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";



const Login = () => {
    const { googleLogin, githubLogin, twitterLogin, logIn } = useContext(AuthContext);
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

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/two-bowls-with-chow-mein-lo-mein-traditional-chinese-stir_92134-4565.jpg?w=900)' }}>

                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="hero min-h-screen  animate__animated animate__fadeIn ">
                        <div className="hero-content flex-col ">
                            <h2 className="font-bold text-4xl">Log In Now !!</h2>
                            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <form onSubmit={handleLogIn} className="card-body">
                                    <div className="form-control">
                                        <label className="label" >
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered text-base" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-black">Password</span>
                                        </label>
                                        <div className="flex items-center">
                                            <input type={showPassword ? 'password' : 'text'} name="password" placeholder="password" className="input input-bordered" required />
                                            {
                                                showPassword ?
                                                    <IoEyeOffSharp onClick={() => { setShowPassword(!showPassword) }} className="-ml-7"></IoEyeOffSharp> :
                                                    <FaEye onClick={() => { setShowPassword(!showPassword) }} className="-ml-7"></FaEye>
                                            }
                                        </div>
                                        <label className="label">

                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                        <label className="label">
                                            <p className="text-black">New here ? <Link to='/register' className="text-blue-800 font-semibold">Please Register</Link></p>
                                        </label>
                                    </div>
                                    <div className="form-control mt-2">
                                        <button type="submit" className="btn btn-primary">Log In</button>
                                    </div>
                                </form>
                                <hr />
                                <h2 className="text-black my-4">Continue with</h2>
                                <div className=" mb-5 flex flex-col px-5 gap-3 ">
                                    <div className="border rounded-md border-gray-200">
                                        <button onClick={() => handleSocialLogIn(googleLogin)} className="flex items-center py-2 text-black mx-auto space-x-3"><FcGoogle></FcGoogle><h1>Login with Google</h1></button>
                                    </div>
                                    <div className=" border rounded-md border-gray-200">
                                        <button onClick={() => handleSocialLogIn(githubLogin)} className="flex items-center py-2 text-black mx-auto space-x-3"><FaGithub></FaGithub><h1>Login with Github</h1></button>
                                    </div>
                                    <div className="border rounded-md border-gray-200">
                                        <button onClick={() => handleSocialLogIn(twitterLogin)} className="flex items-center py-2 text-black mx-auto space-x-3"><FaSquareXTwitter></FaSquareXTwitter><h1>Login with Twitter</h1></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;