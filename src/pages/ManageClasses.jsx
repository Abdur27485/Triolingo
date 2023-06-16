import React, { useEffect, useState } from 'react';

const ManageClasses = () => {
    const [loadingClasses, setLoadingClasses] = useState(true)
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://triolingo-27485-abdur27485.vercel.app/classes')
            .then(res => res.json())
            .then(classes => {
                setLoadingClasses(false)
                setClasses(classes)
            })
    }, [])
    return (
        <div>
            {
                classes ?
                    <div className="overflow-x-auto">
                        <table className="table bg-slate-200 w-11/12 mx-auto">
                            {/* head */}
                            <thead className='bg-slate-700 text-white'>
                                <tr>
                                    <th>Class</th>
                                    <th>Instructor</th>
                                    <th>Seats Available</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    classes.map(singleClass => {
                                        const { className, status, thumbnail, price, availableSeats, instructor, instructorEmail } = singleClass;
                                        return (
                                            <tr className='hover:bg-slate-300'>
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="avatar">
                                                            <div className="mask h-12 w-20">
                                                                <img src={thumbnail} alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{className}</div>
                                                            <div className="text-sm  badge badge-primary mt-1">{status}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {instructor}
                                                    <br />
                                                    <span className="text-sm">{instructorEmail}</span>
                                                </td>
                                                <td>{availableSeats}</td>
                                                <th className='flex gap-4'>
                                                    <button disabled={status !== 'pending' && true} className="btn bg-white hover:bg-slate-700 hover:text-white btn-xs">Deny</button>
                                                    <button disabled={status !== 'pending' && true}  className="btn bg-white hover:bg-slate-700 hover:text-white btn-xs">Approve</button>
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

export default ManageClasses;