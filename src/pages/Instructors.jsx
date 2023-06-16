import React, { useEffect, useState } from 'react';
import InstructorCard from '../components/Instructors/InstructorCard';

const Instructors = () => {
    const [loadingInstructors, setLoadingInstructors] = useState(true);
    const [instructors, setInstructors] = useState(null)
    useEffect(() => {
        fetch('https://triolingo-27485-abdur27485.vercel.app/allInstructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
                setLoadingInstructors(false)
            })
    }, [])
    return (
        <div className='max-w-7xl mx-auto px-4 mt-16'>
            <h1 className='text-5xl font-bold text-center mb-10'>All Instructors</h1>
            <div className='grid gap-4 gap-y-16 grid-cols-1 lg:grid-cols-3'>
                {
                    instructors ? instructors.map(instructor => <InstructorCard data={instructor}></InstructorCard>)
                        :
                        <div className='flex justify-center'>
                            <span className="loading loading-infinity w-24"></span>
                        </div>
                }
            </div>
        </div>
    );
};

export default Instructors;