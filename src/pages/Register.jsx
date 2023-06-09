import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { FiInfo } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Register = () => {
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const { register, handleSubmit } = useForm();
    const { createUser } = useContext(AuthContext);
    const handleRegister = formData => {
        console.log(formData)
        createUser(formData.email, formData.password)
            .then(result => {
                console.log(result.user)
            })
    };
    console.log(tooltipOpen)
    return (
        <div className='max-w-7xl mx-auto px-4'>
            <h1 className='text-center text-2xl lg:text-4xl font-semibold mt-16'>Join the millions learning foreign languages with <span className='font-mono font-extrabold bg-primary text-white px-2'>Triolingo</span> </h1>
            <div className='bg-base-200 px-6 py-4 shadow-lg max-w-3xl mx-auto mt-10 rounded-md'>
                <form className='grid grid-cols-1 lg:gap-4 lg:grid-cols-2'>
                    <div className="form-control">
                        <label className="label">
                            <span className='label-text font-semibold lg:text-xl'>Name</span>
                        </label>
                        <input type="text" {...register("name")} className="input input-bordered input-primary rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className='label-text font-semibold lg:text-xl'>Email</span>
                        </label>
                        <input type="text" {...register("email")} className="input input-bordered input-primary rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className='label-text font-semibold lg:text-xl'>Password</span>
                            <span className='label-text-alt font-semibold lg:text-xl cursor-pointer relative'>
                                <FiInfo className={`${tooltipOpen ? 'text-green-500' : ''}`} onClick={() => setTooltipOpen(!tooltipOpen)}></FiInfo>
                                <div className={` ${tooltipOpen ? 'block' : 'hidden'} absolute -right-4 top-8 min-w-[200px] text-base bg-white p-4 border-2 rounded-md`}>
                                    <div className='absolute -top-2 right-4 h-4 w-4 bg-white border-t-2 border-l-2 rotate-45'></div>
                                    <p className='mb-4'>Make sure your password is at least 6 characters and contains:</p>
                                    <ul className=' list-disc pl-4'>
                                        <li>At least 1 uppercase letter</li>
                                        <li>At least 1 special character</li>
                                    </ul>
                                </div>
                                </span>
                        </label>
                        <input type="password" {...register("password")} className="input input-bordered input-primary rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className='label-text font-semibold lg:text-xl'>Confirm password</span>
                        </label>
                        <input type="password" {...register("confirmPassword")} className="input input-bordered input-primary rounded-md" />
                    </div>
                    <input type="submit" className='btn rounded-3xl btn-primary w-full mt-6' value="Login Now" />
                    <button className='py-2 w-full border-2 border-black mt-6 flex justify-center items-center gap-4 transition-all duration-100 rounded-3xl'>
                        <FcGoogle className='h-6 w-6'></FcGoogle>
                        <span className='lg:text-xl'>Continue with Google</span>
                    </button>
                    <p className='mt-2'>Already have an account? <Link to={'/login'} className='link link-primary'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;