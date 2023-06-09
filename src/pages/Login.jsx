import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../providers/AuthProvider';
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { createUser } = useContext(AuthContext);
    const handleLogin = formData => {
        console.log(formData)
        createUser(formData.email, formData.password)
            .then(result => {
                console.log(result.user)
            })
    };
    return (
        <div className='max-w-7xl mx-auto px-4'>
            <div className='mt-10 grid grid-cols-1 gap-y-4 lg:grid-cols-2 gap-16'>
                <div>
                    <img src="https://i.ibb.co/RgQq8Xj/5639782-2942004-removebg-preview.png" alt="" />
                </div>
                <div>
                    <form onSubmit={handleSubmit(handleLogin)} className='lg:p-10 lg:bg-base-200  lg:shadow-2xl lg:rounded-2xl'>
                    <h1 className=' text-4xl font-bold mb-6'>Nice to see you again.&#128516;</h1>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className='label-text font-semibold lg:text-xl'>Email</span>
                            </label>
                            <input type="text" {...register("email")} className="input input-bordered input-primary" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className='label-text font-semibold lg:text-xl'>Password</span>
                                <span className="label-text-alt">i</span>
                            </label>
                            <input type="password" {...register("password")} className="input input-bordered input-primary" />
                        </div>
                        <input type="submit" className='btn btn-primary w-full mt-6 rounded-3xl' value="Login Now" />
                        <button className='py-2 w-full border-2 border-black mt-6 flex justify-center items-center gap-4 transition-all duration-100 rounded-3xl'>
                            <FcGoogle className='h-6 w-6'></FcGoogle>
                            <span className='lg:text-xl'>Continue with Google</span>
                            </button>
                            <p className='mt-2'>Don't have an account? <Link to={'/register'} className='link link-primary'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;