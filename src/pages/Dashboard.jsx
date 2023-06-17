import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { NavLink, Outlet, json } from 'react-router-dom';
import { HiUserGroup } from 'react-icons/hi';
import { SiGoogleclassroom } from 'react-icons/si';
import { IoMdAddCircle } from 'react-icons/io';
import {MdPlayLesson} from 'react-icons/md'

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [userDetails, setUserDetails] = useState(null);
    useEffect(() => {
        fetch('https://triolingo-27485-abdur27485.vercel.app/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setUserDetails(data))
    }, [])
    return (
        <div className='lg:px-4 lg:mt-10'>
            {userDetails ?
                <>
                    {
                        userDetails.role === 'admin' &&
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 lg:col-span-3 bg-base-200'>
                                <ul className='flex lg:block justify-around'>
                                    <li className='w-full'>
                                        <NavLink className="w-full hover:bg-base-300 transition duration-100 px-4 py-2 font-semibold lg:text-2xl flex gap-2 items-center" to={'manageClasses'}><SiGoogleclassroom className="h-6 w-6 lg:h-8 lg:w-8"></SiGoogleclassroom> Manage Classes</NavLink>
                                    </li>
                                    <li className='w-full'>
                                        <NavLink className="w-full hover:bg-base-300 transition duration-100 px-4 py-2 font-semibold lg:text-2xl flex gap-2 items-center" to={'manageUsers'}><HiUserGroup className="h-6 w-6 lg:h-8 lg:w-8"></HiUserGroup> Manage Users</NavLink>
                                    </li>
                                </ul>

                            </div>
                            <div className='col-span-12 lg:col-span-9'>
                                <Outlet></Outlet>
                            </div>
                        </div>
                    }
                    {
                        userDetails.role === 'student' &&
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 lg:col-span-3 bg-base-200'>
                                <ul className='flex lg:block justify-around'>
                                    <li className='w-full'>
                                        <NavLink className="w-full hover:bg-base-300 transition duration-100 block px-4 py-2 font-semibold lg:text-2xl" to={'manageClasses'}>Selected Classes</NavLink>
                                    </li>
                                    <li className='w-full'>
                                        <NavLink className="w-full hover:bg-base-300 transition duration-100 block px-4 py-2 font-semibold lg:text-2xl" to={'manageUsers'}>Enrolled Classes</NavLink>
                                    </li>
                                </ul>

                            </div>
                            <div className='col-span-12 lg:col-span-9'>
                                <Outlet></Outlet>
                            </div>
                        </div>
                    }
                    {
                        userDetails.role === 'instructor' &&
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 lg:col-span-3 bg-base-200'>
                                <ul className='flex lg:block justify-around'>
                                    <li className='w-full'>
                                        <NavLink className="w-full hover:bg-base-300 transition duration-100 px-4 py-2 font-semibold lg:text-2xl flex gap-2 items-center" to={'addClass'}><IoMdAddCircle className="h-6 w-6 lg:h-8 lg:w-8"></IoMdAddCircle> Add Class</NavLink>
                                    </li>
                                    <li className='w-full'>
                                        <NavLink className="w-full hover:bg-base-300 transition duration-100 px-4 py-2 font-semibold lg:text-2xl flex gap-2 items-center" to={'myClasses'}><MdPlayLesson className="h-6 w-6 lg:h-8 lg:w-8"></MdPlayLesson> My Classes</NavLink>
                                    </li>
                                </ul>

                            </div>
                            <div className='col-span-12 lg:col-span-9'>
                                <Outlet></Outlet>
                            </div>
                        </div>
                    }
                </>
                :
                <div className='flex justify-center'>
                    <span className="loading loading-infinity w-24"></span>
                </div>

            }
        </div>
    );
};

export default Dashboard;