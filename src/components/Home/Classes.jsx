import React from 'react';

const Classes = () => {
    return (
        <div className='max-w-7xl mx-auto mt-32 px-4'>
            <h1 className='text-5xl font-semibold mb-16 text-center'>Popular Classes</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='grid grid-cols-1 lg:grid-cols-10'>
                    <div className='lg:col-span-4 lg:mr-4'>
                        <img src="https://img-b.udemycdn.com/course/240x135/851712_fc61_6.jpg" className='w-full lg:w-auto' alt="" />
                    </div>
                    <div className='lg:col-span-6'>
                    <div className=' flex flex-col h-full'>
                    <h2>The Complete JavaScript Course 2023: From Zero to Expert!</h2>
                    <p>Abdur Rahman</p>
                            <div className=' flex items-end h-full'>
                            <h2>Students enrolled: 1000</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-10'>
                    <div className='lg:col-span-4 lg:mr-4'>
                        <img src="https://img-b.udemycdn.com/course/240x135/851712_fc61_6.jpg" className='w-full lg:w-auto' alt="" />
                    </div>
                    <div className='lg:col-span-6'>
                    <div className=' flex flex-col h-full'>
                    <h2>The Complete JavaScript Course 2023: From Zero to Expert!</h2>
                    <p>Abdur Rahman</p>
                            <div className=' flex items-end h-full'>
                            <h2>Students enrolled: 1000</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Classes;