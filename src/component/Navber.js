import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-slate-100 text-black container mx-auto mb-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-100 text-black rounded-box w-52">
                            <li><Link>Item 1</Link></li>

                            <li><Link>Item 3</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link>Item 1</Link></li>

                        <li><Link>Item 3</Link></li>
                    </ul>
                </div>


                {/* navber end */}

                
                <div className="navbar-end">
                    <Link className="btn">Get started</Link>
                </div>
                <div className="navbar-end ml-4 w-10 rounded-full">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navber;