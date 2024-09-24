import { useContext } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from 'react-hot-toast';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Navber = () => {
    const navigate = useNavigate()
    const navlinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/all-foods'>All Foods</Link></li>
        <li><Link to='/gallery'>Gallery</Link></li>
        <li><Link to='/reg'>Registration</Link></li>
    </>
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Log Out succesfull !");
                navigate('/login')
            })
            .catch()
    }
    return (
        <div className="navbar bg-base-100 mt-0 pt-0 px-5 mb-10 max-w-[1920px] mx-auto">
            <Tooltip id="profile" />
            <div className="navbar-start">
                <div className="dropdown z-20">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <Link to='/'><img className="w-24 md:w-32 " src="https://i.ibb.co/2PQG985/logo.png" alt="logo" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end ">

                {
                    user &&
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className=" ">
                            <img className="rounded-full max-w-10 tooltip tooltip-left" data-tooltip-id='profile' data-tooltip-content={user.displayName} src={user ? user.photoURL : ''} alt="" />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52 absolute -translate-x-40 ">
                            <li><Link to={`/my-foods/${user.email}`}>My Food</Link></li>
                            <li><Link to={`/my-purchases/${user.email}`}>My Order List</Link></li>
                            <li><Link to='/add-food'>Add a Food</Link></li>
                            <li><h1 onClick={handleLogOut} className="font-bold">Log Out</h1></li>
                        </ul>
                    </div>


                }
                {
                    user ? '' :
                        <Link to='/login'>
                            <h1 className="btn font-bold">Log in</h1>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Navber;