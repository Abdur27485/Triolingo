import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../providers/AuthProvider';

const AddClass = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit } = useForm();

    const handleAddClass = formData => {
        console.log(formData)
    }

    return (
        <div>
            <h2 className='text-center text-4xl font-semibold mb-10'>Add Class</h2>
            <form className='mx-4 p-4 bg-base-300 rounded-md grid grid-cols-1 lg:grid-cols-2 gap-4' onSubmit={handleSubmit(handleAddClass)}>
                <div className="form-control w-full col-span-2 lg:col-span-1">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name</span>
                    </label>
                    <input type="text" {...register('className')} placeholder="Enter Class Name" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full col-span-2 lg:col-span-1">
                    <label className="label">
                        <span className="label-text font-semibold">Class Image</span>
                    </label>
                    <input type="file"{...register('classImage')} className='file-input file-input-primary  w-full' />
                </div>
                <div className="form-control w-full col-span-2 lg:col-span-1">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name</span>
                    </label>
                    <input type="text" {...register('instructorName')} placeholder="Enter Class Name" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full col-span-2 lg:col-span-1">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="text" {...register('className')} defaultValue={'aammmi'}  className="input input-bordered w-full" />
                </div>
                <div className='col-span-2'>
                    <button type='submit' className='btn block btn-primary w-full lg:w-1/2 lg:mx-auto'>Add Class</button>
                </div>
            </form>
        </div>
    );
};

export default AddClass;