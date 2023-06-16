import React, { createRef, useEffect, useState } from 'react';

const ManageSingleUser = ({ user }) => {
    const { name, email, role } = user;
    const [roleState, setRoleState] = useState(null)

    useEffect(() => {
        setRoleState(role)
    }, [])

    const handleRoleChange = (email, updatedRole) => {
        fetch('https://triolingo-27485-abdur27485.vercel.app/user', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: email, role: updatedRole })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data, updatedRole)
                setRoleState(updatedRole)
            })
    }
    return (
        <tr className='hover:bg-slate-300'>
            <td>
                <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">{email}</div>
                </div>
            </td>
            <td>
                {roleState}
            </td>
            <th className='flex gap-4 justify-center'>
                <button disabled={roleState === 'admin' ? true : false} onClick={() => handleRoleChange(email, 'admin')} className="btn">Admin</button>
                <button disabled={roleState === 'instructor' ? true : false} onClick={() => handleRoleChange(email, 'instructor')} className="btn">Instructor</button>
                <button disabled={roleState === 'student' ? true : false} onClick={() => handleRoleChange(email, 'student')} className="btn">Student</button>
            </th>
        </tr>
    );
};

export default ManageSingleUser;