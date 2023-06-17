import React, { useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';

const Classes = () => {
    const [classes, setClasses] = useState(null);
    useEffect(() => {
        fetch('https://triolingo-27485-abdur27485.vercel.app/popularClasses')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div className='max-w-7xl mx-auto mt-32 px-4'>
            <h1 className='text-5xl font-semibold mb-16 text-center'>Popular Classes</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    classes?.map(singleClass => {
                        const { _id, enrolled, className, instructor, thumbnail } = singleClass;
                        return (
                            <Slide>
                                <div key={_id} className='grid grid-cols-1 lg:grid-cols-10 border rounded-tr-3xl rounded-bl-3xl border-black p-4 bg-base-200'>
                                    <div className='lg:col-span-4 lg:mr-4 overflow-hidden rounded-md'>
                                        <img src={thumbnail} className='w-full h-full lg:max-h-[100px] lg:min-w-full lg:w-auto rounded-md hover:scale-105 transition duration-100' alt="" />
                                    </div>
                                    <div className='lg:col-span-6'>
                                        <div className=' flex flex-col h-full'>
                                            <h2>{className}</h2>
                                            <p>{instructor}</p>
                                            <div className=' flex items-end h-full'>
                                                <h2>Students enrolled: {enrolled}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Classes;