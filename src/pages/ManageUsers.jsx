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
                    allUsers.length
                    :
                    <div className='flex justify-center'>
                        <span className="loading loading-infinity w-24"></span>
                    </div>
            }
        </div>
    );
};

export default ManageUsers;