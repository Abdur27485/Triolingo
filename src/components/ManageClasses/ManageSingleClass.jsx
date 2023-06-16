import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const ManageSingleClass = ({ singleClass }) => {
    const { register, handleSubmit } = useForm();
    const { _id, className, status, thumbnail, price, availableSeats, instructor, instructorEmail } = singleClass;
    const [classStatus, setClassStatus] = useState(null)

    useEffect(() => {
        setClassStatus(status)
    }, [])

    const handleChangeStatus = (id, newStatus) => {
        fetch('https://triolingo-27485-abdur27485.vercel.app/class', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id, newStatus })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    setClassStatus(newStatus);
                }
            })
    }

    const handleFeedbackSubmit = (formData) => {
        const data = { id: _id, feedback: formData.feedback };

        fetch('https://triolingo-27485-abdur27485.vercel.app/feedback', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){

                }
            })

    }
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
                        <div className="text-sm  badge badge-primary mt-1">{classStatus}</div>
                    </div>
                </div>
            </td>
            <td className='text-green-600'>${price}</td>
            <td>
                {instructor}
                <br />
                <span className="text-sm">{instructorEmail}</span>
            </td>
            <td>{availableSeats}</td>
            <th className='flex gap-4'>
                <button disabled={classStatus !== 'pending' && true} className="btn bg-white hover:bg-slate-700 hover:text-white btn-xs" onClick={() => handleChangeStatus(_id, 'denied')}>Deny</button>
                <button disabled={classStatus !== 'pending' && true} className="btn bg-white hover:bg-slate-700 hover:text-white btn-xs" onClick={() => handleChangeStatus(_id, 'approved')}>Approve</button>
                <label disabled={classStatus == 'pending' ? true : false} className="btn bg-white hover:bg-slate-700 hover:text-white btn-xs" htmlFor={_id}>Feedback</label>
                {/* Put this part before </body> tag */}
                <input type="checkbox" id={_id} className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-center">Send Feedback</h3>
                        <form onSubmit={handleSubmit(handleFeedbackSubmit)}>
                            <textarea {...register('feedback')} type="text" className='input input-bordered p-2 h-32 mt-4 w-full' placeholder='Write Feedback' />
                            <input type="submit" value="Send" className='btn btn-primary px-10 mt-4' />
                        </form>
                        <div className="modal-action">
                            <label htmlFor={_id} className="btn">Close</label>
                        </div>
                    </div>
                </div>
            </th>
        </tr>
    )
};

export default ManageSingleClass;