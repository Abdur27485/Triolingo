import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { NavLink, Outlet, json } from 'react-router-dom';

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
    console.log(userDetails)
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
                                        <NavLink className="w-full hover:bg-base-300 transition duration-100 block px-4 py-2 font-semibold lg:text-2xl" to={'manageClasses'}>Manage Classes</NavLink>
                                    </li>
                                    <li className='w-full'>
                                        <NavLink className="w-full hover:bg-base-300 transition duration-100 block px-4 py-2 font-semibold lg:text-2xl" to={'manageUsers'}>Manage Users</NavLink>
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
                        <div><Outlet></Outlet></div>
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