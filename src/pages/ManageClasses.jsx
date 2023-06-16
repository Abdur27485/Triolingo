import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import ManageSingleClass from '../components/ManageClasses/ManageSingleClass';

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
    }, []);
    const handleChangeStatus = (id, newStatus) => {
        fetch('http://localhost:27485/class', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id, newStatus })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className=''>
            {
                classes ?
                    <div className="overflow-x-auto">
                        <table className="table bg-slate-200 w-11/12 mx-auto">
                            {/* head */}
                            <thead className='bg-slate-700 text-white'>
                                <tr>
                                    <th>Class</th>
                                    <th>Price</th>
                                    <th>Instructor</th>
                                    <th>Seats Available</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    classes.map(singleClass => <ManageSingleClass singleClass={singleClass}></ManageSingleClass>)
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