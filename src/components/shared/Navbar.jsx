import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)
    return (
        <div className='max-w-7xl mx-auto px-[16px] flex flex-row justify-between items-center py-2'>
            {/* Logo */}
            <div className='flex flex-row-reverse'>
                <Link to={'/'}>
                    <h1 className='text-2xl lg:text-4xl font-mono font-extrabold bg-primary text-white px-2'>Triolingo</h1>
                    </Link>
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
                                <img src={`${user?.photoURL}`} className='w-10 h-10 rounded-full' alt="" />
                                <button className='btn btn-ghost' onClick={() => logOutUser()}>Log Out</button>
                            </div>
                        </>
                        :
                        <Link to={'/login'} className=' rounded-lg py-1 lg:text-xl lg:py-2 px-5 inline-block lg:px-10 bg-green-500 border-none text-white hover:bg-green-600'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;