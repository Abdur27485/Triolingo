import React, { useState } from 'react';

const SingleClasses = ({singleClass, userDetails}) => {
    const [isSelected, setIsSelected] = useState(false);
    const { className, instructor, availableSeats, price, thumbnail } = singleClass
    return (
        <div className='grid grid-cols-1 lg:grid-cols-10 gap-x-4 bg-gray-50 hover:shadow-md transition duration-100 rounded-xl'>
            <div className='lg:col-span-4'>
                <img src={thumbnail} className='h-full rounded-t-xl lg:rounded-s-xl lg:rounded-tr-none' alt="" />
            </div>
            <div className='lg:col-span-6 px-4 lg:px-0 py-2 lg:pr-4 h-full'>
                <p className='font-semibold text-2xl'>{className}</p>
                <h2 className='font-semibold text-base text-gray-600 ml-1 mt-1'>{instructor}</h2>
                <p className='text-gray-500 mt-2'>{availableSeats} seats available</p>
                <div className='flex items-end justify-between mt-4'>
                    <p className='mb-2 text-green-600 font-bold'>${price}</p>
                    <button disabled={userDetails?.role === 'admin' || userDetails?.role === ' instructor' ? true : false || isSelected ? true : false} onClick={() => setIsSelected(!isSelected)} className='btn btn-primary'>Select</button>
                </div>
            </div>
        </div>
    )
};

export default SingleClasses;