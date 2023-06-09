import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='max-w-7xl mx-auto px-[16px] flex flex-row justify-between items-center py-2'>
            {/* Logo */}
            <div className='flex flex-row-reverse'>
                <h1 className='text-2xl lg:text-4xl font-mono font-extrabold bg-primary text-white px-2'>Triolingo</h1>
                {/* Navigation Links small */}
                
            </div>
            {/* Navigation Links Large */}
            <div>
                <ul className='hidden lg:flex gap-4'>
                    <li>
                        <Link to={'/'} className='cursor-pointer btn btn-ghost'>Home</Link>
                    </li>
                    <li>
                        <Link to={'/instructors'} className='cursor-pointer btn btn-ghost'>Instructors</Link>
                    </li>
                    <li>
                        <Link to={'/classes'} className='cursor-pointer btn btn-ghost'>Classes</Link>
                    </li>
                    <li>
                        <a className='cursor-pointer btn btn-ghost'>Dashboard</a>
                    </li>
                </ul>
            </div>
            {/* Navbar-end */}
            <div>
                <Link to={'/login'} className=' rounded-lg py-1 lg:text-xl lg:py-2 px-5 inline-block lg:px-10 bg-green-500 border-none text-white hover:bg-green-600'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;