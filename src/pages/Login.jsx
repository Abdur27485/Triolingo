import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const { loginUser,googleSignIn } = useContext(AuthContext);
    const handleLogin = formData => {
        console.log(formData)
        loginUser(formData.email, formData.password)
            .then(result => {
                console.log(result.user)
                Swal.fire(`Welcome, ${result.user?.displayName}`);
                navigate('/')
            })
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const userInfo = { name: result.user.displayName, email: result.user.email, role : 'student' };
                fetch('https://triolingo-27485-abdur27485.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        Swal.fire(`Welcome, ${result.user?.displayName}`)
                        navigate('/')
                    })
            })
    }
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
                            </label>
                            <input type="password" {...register("password")} className="input input-bordered input-primary" />
                        </div>
                        <input type="submit" className='btn btn-primary w-full mt-6 rounded-3xl' value="Login Now" />
                        <div onClick={handleGoogleSignIn} className=' btn py-2 w-full border-2 border-black mt-6 flex justify-center items-center gap-4 transition-all duration-100 rounded-3xl'>
                            <FcGoogle className='h-6 w-6'></FcGoogle>
                            <span className='lg:text-xl'>Continue with Google</span>
                        </div>
                        <p className='mt-2'>Don't have an account? <Link to={'/register'} className='link link-primary'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;