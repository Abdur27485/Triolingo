import React, { createRef, useEffect, useState } from 'react';
import ManageSingleUser from '../components/ManageUsers/ManageSingleUser';

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
                    <div className="overflow-x-auto">
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
                                {
                                    allUsers.map(user => <ManageSingleUser user={user}></ManageSingleUser>)
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