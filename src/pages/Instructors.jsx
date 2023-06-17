import React, { useEffect, useState } from 'react';
import InstructorCard from '../components/Instructors/InstructorCard';
import axios from 'axios';

const Instructors = () => {
    const [loadingInstructors, setLoadingInstructors] = useState(true);
    const [instructors, setInstructors] = useState(null)

    // axios get call
    axios.get('https://triolingo-27485-abdur27485.vercel.app/allInstructors')
        .then(res => {
            console.log(res)
            setInstructors(res);
            setLoadingInstructors(false)
        })
    return (
        <div className='max-w-7xl mx-auto px-4 mt-16'>
            <h1 className='text-5xl font-bold text-center mb-10'>All Instructors</h1>
            {
                instructors ? <div className='grid gap-4 gap-y-16 grid-cols-1 lg:grid-cols-3'>
                    {
                        instructors.data?.map(instructor => <InstructorCard data={instructor}></InstructorCard>)
                    }
                </div>
                    :
                    <div className='flex justify-center'>
                        <span className="loading loading-infinity w-24"></span>
                    </div>
            }
        </div>
    );
};

export default Instructors;