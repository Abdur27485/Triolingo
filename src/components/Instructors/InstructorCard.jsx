import React from 'react';

const InstructorCard = ({data}) => {
    const {name, email, imgLink, } = data;
    return (
        <div className='flex flex-col'>
        <div>
            <img src={imgLink.data.display_url} className='rounded-2xl rounded-b-none max-h-64 w-full' alt="" />
        </div>
        <div className='border-2 rounded-t-none p-4 rounded-2xl w-full'>
            <h1 className='text-4xl font-bold text-primary'>{name}</h1>
            <p className='text-secondary mt-1 mb-6'>{email}</p>
            <div className='w-full'>
            </div>
            <button className='btn w-full btn-primary font-semibold text-2xl'>See Classes</button>
        </div>
    </div>
    );
};

export default InstructorCard;