import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FiLogOut } from 'react-icons/fi'
import { AiOutlineMenuUnfold, AiOutlineCloseCircle } from 'react-icons/ai'

const Navbar = ({ themeToggle, themeToggleFn }) => {
    const [isOpen, setIsopen] = useState(false);
    const { user, logOutUser } = useContext(AuthContext)
    return (
        <div className='relative max-w-7xl mx-auto px-[8px] lg:px-4 flex flex-row justify-between items-center py-2'>
            {/* Logo */}
            <div className='flex flex-row-reverse items-center'>
                <Link to={'/'}>
                    <h1 className='text-lg lg:text-4xl font-mono font-extrabold bg-primary text-white px-2'>Triolingo</h1>
                </Link>
                {/* Navigation Links small */}
                <div>
                    <button onClick={() => setIsopen(!isOpen)} className='px-2 py-1 bg-base-200 mr-1 rounded-md'>
                        {isOpen ? <AiOutlineCloseCircle className='w-6 h-6'></AiOutlineCloseCircle>
                            :
                            <AiOutlineMenuUnfold className='h-6 w-6'></AiOutlineMenuUnfold>
                        }
                    </button>
                </div>
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
                        <Link to={'/dashboard'} className='cursor-pointer btn btn-ghost'>Dashboard</Link>
                    </li>
                </ul>
            </div>
            {/* Navbar-end */}
            <div>
                {
                    user ?
                        <>
                            <div className='flex gap-4 items-center'>
                                <img src={`${user?.photoURL}`} className='w-6 h-6 lg:w-12 lg:h-12 rounded-full' alt="" />
                                <button className='bg-base-200 px-2 py-1 lg:px-4 lg:py-2 rounded-md hover:bg-base-300 transition duration-100' onClick={() => logOutUser()}><FiLogOut className='h-6 w-6 lg:h-10 lg:w-10'></FiLogOut></button>
                                <label className="swap swap-rotate bg-gray-200 px-2 lg:px-4 lg:py-[6px] rounded-md hover:bg-gray-300 transition duration-100 py-1">
                                    <input onClick={() => themeToggleFn(!themeToggle)} type="checkbox" />
                                    {/* sun icon */}
                                    <svg className="swap-on fill-current lg:w-8 w-6 h-6 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                    {/* moon icon */}
                                    <svg className="swap-off fill-current lg:w-8 w-6 h-6 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                </label>
                            </div>
                        </>
                        :
                        <div className='flex gap-x-4 items-center'>
                            <Link to={'/login'} className='rounded-md py-1 lg:text-xl lg:py-2 px-2 inline-block lg:px-10 bg-green-500 border-none text-white hover:bg-green-600'>Login</Link>
                            <label className="swap swap-rotate bg-gray-200 px-2 lg:px-4 lg:py-[6px] rounded-md hover:bg-gray-300 transition duration-100 py-1">
                                <input onClick={() => themeToggleFn(!themeToggle)} type="checkbox" />
                                {/* sun icon */}
                                <svg className="swap-on fill-current lg:w-8 w-6 h-6 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                {/* moon icon */}
                                <svg className="swap-off fill-current lg:w-8 w-6 h-6 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                            </label>
                        </div>
                }
            </div>

            {/* mobile view menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} absolute left-0 -bottom-[160px]  z-10 w-full`}>
                <ul className="menu rounded-t-none bg-base-200 w-full rounded-box">
                    <li>
                        <Link to={'/'} className='cursor-pointer'>Home</Link>
                    </li>
                    <li>
                        <Link to={'/instructors'} className='cursor-pointer'>Instructors</Link>
                    </li>
                    <li>
                        <Link to={'/classes'} className='cursor-pointer'>Classes</Link>
                    </li>
                    <li>
                        <Link to={'/dashboard'} className='cursor-pointer'>Dashboard</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;