import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Bounce, Fade, Slide } from 'react-awesome-reveal';

const Instructors = () => {
    const [instructors, setInstructors] = useState(null);
    useEffect(() => {
        fetch('https://triolingo-27485-abdur27485.vercel.app/popularInstructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    console.log(instructors)
    return (
        <div className=" max-w-7xl mx-auto px-4 mt-32">
            <h1 className='text-5xl font-semibold mb-16 text-center'>Instructors</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    instructors?.map(instructor => {
                        const { name, imgLink } = instructor;

                        return (
                            <Fade>
                                <div>
                                    <div>
                                        <img src={imgLink.data.display_url} className='w-full max-h-64' alt="" />
                                    </div>
                                    <div className='w-full bg-black bg-opacity-100 p-4'>
                                        <h2 className='font-bold text-2xl text-white'>{name}</h2>
                                    </div>
                                </div>
                            </Fade>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Instructors;