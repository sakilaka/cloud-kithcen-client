import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Context/AuthContext';

const Navber = () => {
    const { user, logOut } = useContext(AuthUserContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="navbar p-5 bg-slate-100 text-black container mx-auto mb-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-100 text-black rounded-box w-52">
                            {
                                user?.uid ?
                                    <>
                                        <li><Link to='/addService' className='btn btn-ghost'>Add Service</Link></li>
                                        <li><Link to='/myReviews' className='btn btn-ghost'>My reviews</Link></li>
                                        <li><button onClick={handleLogOut} className='btn btn-ghost'>Sign Out</button></li>
                                    </>
                                    :
                                    <>
                                        <li><Link to='/login'>Sign In</Link></li>
                                        <li><Link to='/register'>Sign Up</Link></li>
                                    </>

                            }
                            <li><Link className='btn btn-ghost' to='/services'>Services</Link></li>
                            <li><Link className='btn btn-ghost' to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Aka Food Store</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            user?.uid ?
                                <>
                                    <li><Link to='/addService' className='btn btn-ghost'>Add Service</Link></li>
                                    <li><Link to='/myReviews' className='btn btn-ghost'>My reviews</Link></li>
                                    <li><button onClick={handleLogOut} className='btn btn-ghost'>Sign Out</button></li>
                                </>
                                :
                                <>
                                    <li><Link to='/login'>Sign In</Link></li>
                                    <li><Link to='/register'>Sign Up</Link></li>
                                </>

                        }
                        <li><Link className='btn btn-ghost' to='/services'>Services</Link></li>
                        <li><Link className='btn btn-ghost' to='/blog'>Blog</Link></li>

                    </ul>
                </div>


                {/* navber end */}


                <div className="navbar-end">
                    <Link className="btn">Subscribe</Link>
                </div>
                <div className="navbar-end ml-4 w-10 rounded-full">
                    <img className='rounded-3xl' src={user?.photoURL} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navber;