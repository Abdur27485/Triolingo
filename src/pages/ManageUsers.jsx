import React, { useEffect, useState } from 'react';

const ManageUsers = () => {
    const [allUsers, setAllUsers] = useState(null);
    const [loadingUsers, setLoadingUsers] = useState(true);
    useEffect(() => {
        fetch('https://triolingo-27485-abdur27485.vercel.app/users')
            .then(res => res.json())
            .then(data => setAllUsers(data))
    }, [])
    return (
        <div>
            {
                allUsers ?
                    <div className="">
                        <table className="table bg-slate-200 w-11/12 mx-auto">
                            {/* head */}
                            <thead className='bg-slate-700 text-white'>
                                <tr>
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    allUsers.map(user => {
                                        const { name, email, role } = user;
                                        return (
                                            <tr className='hover:bg-slate-300'>
                                                <td>
                                                        <div>
                                                            <div className="font-bold">{name}</div>
                                                            <div className="text-sm opacity-50">{email}</div>
                                                        </div>
                                                </td>
                                                <td>
                                                    {role}
                                                </td>
                                                <th className='flex gap-4 justify-center'>
                                                    <button className="btn">Admin</button>
                                                    <button className="btn">Instructor</button>
                                                </th>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <div className='flex justify-center'>
                        <span className="loading loading-infinity w-24"></span>
                    </div>
            }
        </div>
    );
};

export default ManageUsers;