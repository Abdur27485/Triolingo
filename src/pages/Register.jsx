import React, { useContext, useState } from 'react';
import { get, useForm } from 'react-hook-form';
import { AuthContext } from '../providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { FiInfo } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { data } from 'autoprefixer';

const Register = () => {
    const navigate = useNavigate();
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const { register, handleSubmit, formState, watch } = useForm();
    const { errors } = formState;
    const { createUser, updateUserProfile, logOutUser, loginUser, googleSignIn } = useContext(AuthContext);
    const handleRegister = data => {
        console.log(data.image[0])

        const imgUploadToken = import.meta.env.VITE_imgUploadToken;
        const imgHostingUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${imgUploadToken}`;

        const formImg = new FormData();
        formImg.append('image', data.image[0])

        fetch(imgHostingUrl, {
            method: 'POST',
            body: formImg
        })
            .then(res => res.json())
            .then(imgUrl => {
                console.log(imgUrl)
                createUser(data.email, data.Password)
                    .then(result => {
                        console.log(result.user)
                        const loggedUser = result.user;
                        updateUserProfile(data.name, imgUrl.data.display_url)
                            .then(() => {
                                const userInfo = { name: loggedUser.displayName, email: loggedUser.email };
                                fetch('https://triolingo-27485-abdur27485.vercel.app/users', {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(userInfo)
                                })
                                    .then(res => res.json())
                                    .then(result => {
                                        console.log(result)
                                        logOutUser()
                                            .then(() => {
                                                loginUser(data.email, data.Password)
                                                    .then(result => {
                                                        Swal.fire(`Welcome, ${result.user?.displayName}`)
                                                    })
                                                navigate('/')
                                            })
                                    })
                            })
                    })
            })

    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const userInfo = { name: result.user.displayName, email: result.user.email };
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
            <h1 className='text-center text-2xl lg:text-4xl font-semibold mt-12'>Join the millions learning foreign languages with <span className='font-mono font-extrabold bg-primary text-white px-2'>Triolingo</span> </h1>
            <div className='bg-base-200 px-6 py-4 shadow-lg max-w-3xl mx-auto mt-10 rounded-md'>
                <form onSubmit={handleSubmit(handleRegister)} className='grid grid-cols-1 lg:gap-4 lg:grid-cols-2'>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className='label-text font-semibold lg:text-xl'>Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })} className="input input-bordered input-primary rounded-md" />
                        <p className='text-red-700'>{errors.name?.message}</p>
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className='label-text font-semibold lg:text-xl'>Email</span>
                        </label>
                        <input type="text" {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            }
                        })} className="input input-bordered input-primary rounded-md" />
                        <p className="text-red-700">{errors.email?.message}</p>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className='label-text font-semibold lg:text-xl'>Password</span>
                            <span className='label-text-alt font-semibold lg:text-xl cursor-pointer relative'>
                                <FiInfo className={`${tooltipOpen ? 'text-green-500' : ''}`} onClick={() => setTooltipOpen(!tooltipOpen)}></FiInfo>
                                <div className={` ${tooltipOpen ? 'block' : 'hidden'} absolute -right-4 top-8 min-w-[200px] text-base bg-white p-4 border border-black rounded-md`}>
                                    <div className='absolute -top-2 right-4 h-4 w-4 bg-white border-t border-t-black border-l-black border-l rotate-45'></div>
                                    <p className='mb-4'>Make sure your password is at least 6 characters and contains:</p>
                                    <ul className=' list-disc pl-4'>
                                        <li>At least 1 uppercase letter</li>
                                        <li>At least 1 special character</li>
                                    </ul>
                                </div>
                            </span>
                        </label>
                        <input type="password" {...register("Password", {
                            required: {
                                value: true,
                                message: 'Password is required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Password should have at least 6 characters'
                            },
                            pattern: {
                                value: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                                message: 'At least one special character and one uppercase letter is required'
                            }
                        })} className="input input-bordered input-primary rounded-md" />
                        <p className="text-red-700"></p>
                        <p className="text-red-700">{errors.Password?.message}</p>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className='label-text font-semibold lg:text-xl'>Confirm password</span>
                        </label>
                        <input type="password" {...register("confirmPassword", {
                            required: {
                                value: true,
                                message: 'Confirm Password'
                            },
                            validate: (value) => {
                                if (watch("Password") !== value) {
                                    return 'Password did not match'
                                }

                            }
                        })} className="input input-bordered input-primary rounded-md" />
                        <p className='text-red-700'>{errors.confirmPassword?.message}</p>
                    </div>
                    <div className="form-control mt-4 lg:col-span-2">
                        <input type="file" {...register('image')} className='file-input' />
                    </div>
                    <input type="submit" className='btn rounded-3xl btn-primary w-full mt-6' value="Login Now" />
                    <div onClick={handleGoogleSignIn} className='btn py-2 cursor-pointer w-full border-2 border-black mt-6 flex justify-center items-center gap-4 transition-all duration-100 rounded-3xl'>
                        <FcGoogle className='h-6 w-6'></FcGoogle>
                        <span className='lg:text-xl'>Continue with Google</span>
                    </div>
                    <p className='mt-2'>Already have an account? <Link to={'/login'} className='link link-primary'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;