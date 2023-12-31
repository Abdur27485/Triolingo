import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import SingleClass from '../components/Classes/SingleClass';
import axios from 'axios';

const Classes = () => {
    const {user} = useContext(AuthContext)
    const [loadingClasses, setLoadingClasses] = useState(true)
    const [classes, setClasses] = useState([]);
    const [userDetails, setUserDetails] = useState(null);
    
    useEffect(() => {
        fetch('https://triolingo-27485-abdur27485.vercel.app/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setUserDetails(data))
    }, [])

    // axios get call
    axios.get('https://triolingo-27485-abdur27485.vercel.app/classes')
    .then(res => {
        console.log(res)
        setClasses(res);
        setLoadingClasses(false)
    })

    console.log(classes)
    return (
        <div className='max-w-7xl mx-auto p-4'>
            <h1 className='text-center text-2xl lg:text-5xl mb-10 font-semibold mt-12'>All Classes</h1>
            {
                loadingClasses ?
                    <>
                        <div className='flex justify-center'>
                            <span className="loading loading-infinity w-24"></span>
                        </div>
                    </>
                    :
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 gap-y-10'>
                        {
                            classes.data.map(singleClass => <SingleClass singleClass={singleClass} userDetails={userDetails}></SingleClass>)
                        }
                        {/* <div className='grid grid-cols-1 lg:grid-cols-10 gap-x-4 bg-red-500 hover:shadow-md transition text-white duration-100 rounded-xl'>
                            <div className='lg:col-span-4'>
                                <img src="https://i.ytimg.com/vi/o1IaduQICO0/maxresdefault.jpg" className='h-full rounded-t-xl lg:rounded-s-xl lg:rounded-tr-none' alt="" />
                            </div>
                            <div className='lg:col-span-6 px-4 lg:px-0 py-2 lg:pr-4 h-full'>
                                <div className='flex gap-2 items-center mb-4'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjPFpNunMdFWT2ZLVhc596achYGQkmPCtY1hnDp3jBsH3S4AUOLoZ744L-qNbLKmCfUMM&usqp=CAU" className=' w-10 h-10 rounded-full' alt="" />
                                    <p className='font-semibold'>Abdur Rahman</p>
                                </div>
                                <h2 className='font-semibold'>JavaScript Full Course | JavaScript Tutorial For Beginners | JavaScript Training | Edureka</h2>
                                <p className='text-white mt-2'>0 seats available</p>
                                <div className='flex items-end justify-between mt-4'>
                                        <p className='mb-2 text-white font-bold'>$100</p>
                                        <button className='btn btn-primary' disabled={true}>Select</button>
                                </div>
                            </div>
                    </div> */}
                    </div>
            }
        </div>
    );
};

export default Classes;