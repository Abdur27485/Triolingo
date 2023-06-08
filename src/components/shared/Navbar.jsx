import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='max-w-7xl mx-auto px-[16px] flex flex-row justify-between items-center'>
            {/* Logo */}
            <div className='flex flex-row-reverse'>
                <h1 className='text-4xl'>Triolingo</h1>
                {/* Navigation Links small */}
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
            {/* Navigation Links Large */}
            <div>
                <ul className='hidden lg:flex gap-4'>
                    <li>
                        <a className='cursor-pointer'>Home</a>
                    </li>
                    <li>
                        <Link to={'/instructors'} className='cursor-pointer'>Instructors</Link>
                    </li>
                    <li>
                        <a className='cursor-pointer'>Classes</a>
                    </li>
                    <li>
                        <a className='cursor-pointer'>Dashboard</a>
                    </li>
                </ul>
            </div>
            {/* Navbar-end */}
            <div>
                <button className='btn btn-outline'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;