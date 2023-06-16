import React, { createRef, useState } from 'react';

const ManageSingleUser = ({ user }) => {
    const roleRef = createRef(null);
    const adminBtnRef = createRef(null)
    const instructorBtnRef = createRef(null)
    const { name, email, role } = user;

    const handleRoleChange = (event, email, updatedRole) => {
        fetch('https://triolingo-27485-abdur27485.vercel.app/user', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: email, role: updatedRole })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                roleRef.current.innerText = updatedRole;
                if (updatedRole === 'admin') {
                    adminBtnRef.current.disabled = true;
                }
                if (updatedRole === 'instructor') {
                    instructorBtnRef.current.disabled = true;
                }
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
            <td ref={roleRef}>
                {role}
            </td>
            <th className='flex gap-4 justify-center'>
                <button ref={adminBtnRef} disabled={role === 'admin' && true} onClick={() => handleRoleChange(email, 'admin')} className="btn">Admin</button>
                <button ref={instructorBtnRef} disabled={role === 'instructor' && true} onClick={() => handleRoleChange(email, 'instructor')} className="btn">Instructor</button>
            </th>
        </tr>
    );
};

export default ManageSingleUser;