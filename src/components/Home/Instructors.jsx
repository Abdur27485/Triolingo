import React from 'react';

const Instructors = () => {
    return (
        <div className=" max-w-7xl mx-auto px-4 mt-32">
            <h1 className='text-5xl font-semibold mb-16 text-center'>Instructors</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div className="relative">
                    <div>
                        <img src="https://www.weareteachers.com/wp-content/uploads/confident.jpg" alt="" />
                    </div>
                    <div className='absolute w-full bg-black bg-opacity-100 p-4 bottom-0'>
                        <h2 className='font-bold text-2xl text-white'>Abdur Rahman</h2>
                    </div>
                </div>
                <div className="relative">
                    <div>
                        <img src="https://www.weareteachers.com/wp-content/uploads/confident.jpg" alt="" />
                    </div>
                    <div className='absolute w-full bg-black bg-opacity-100 p-4 bottom-0'>
                        <h2 className='font-bold text-2xl text-white'>Abdur Rahman</h2>
                    </div>
                </div>
                <div className="relative">
                    <div>
                        <img src="https://www.weareteachers.com/wp-content/uploads/confident.jpg" alt="" />
                    </div>
                    <div className='absolute w-full bg-black bg-opacity-100 p-4 bottom-0'>
                        <h2 className='font-bold text-2xl text-white'>Abdur Rahman</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructors;