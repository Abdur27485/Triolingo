import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../providers/AuthProvider';

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
                    <img src="https://o.remove.bg/downloads/0c370d30-8ea1-4e84-8d0f-d3d812b4a5f0/login-concept-illustration_114360-739-removebg-preview.png" alt="" />
                </div>
                <div>
                    <form onSubmit={handleSubmit(handleLogin)} className='p-10 bg-base-200  shadow-2xl rounded-2xl'>
                    <h1 className=' text-4xl font-bold mb-6'>Nice to see you again.</h1>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className='label-text font-semibold lg:text-xl'>Email</span>
                            </label>
                            <input type="text" {...register("email")} className="input rounded-none input-bordered input-primary" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className='label-text font-semibold lg:text-xl'>Password</span>
                                <span className="label-text-alt">i</span>
                            </label>
                            <input type="password" {...register("password")} className="input rounded-none input-bordered input-primary" />
                        </div>
                        <input type="submit" className='btn rounded-none btn-primary w-full mt-6' value="Login Now" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;