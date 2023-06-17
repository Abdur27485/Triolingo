import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='min-h-screen bg-base-300 pt-10'>
            <img src="https://media.tenor.com/OyUVgQi-l-QAAAAC/404.gif" className='w-1/2 h-[400px] rounded-md mx-auto' alt="" />
            <div className="flex justify-center mt-10">
                <Link to={'/'} className='btn btn-primary flex'>Back To Home</Link>
            </div>
        </div>
    );
};

export default NotFound;