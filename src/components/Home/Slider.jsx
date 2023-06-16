import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigate, useNavigate } from 'react-router-dom';

const Slider = () => {
    const navigate = useNavigate();
    return (
<>
{/* mobile view */}
<div className='lg:hidden'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero min-h-screen bg-slider1">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-4xl">
                                <h1 className="mb-28 text-2xl lg:text-5xl font-bold leading-normal">Open up a world of possibilities</h1>
                                <button onClick={() => navigate('/classes')} className="btn btn-primary">Enroll Now</button>
                                <button className="btn ml-4 btn-outline text-white">Learn More</button>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen bg-slider2">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-4xl">
                                <h1 className="mb-28 text-2xl lg:text-5xl font-bold leading-normal">Easy-to-use and fun learning platform</h1>
                                <button onClick={() => navigate('/classes')} className="btn btn-primary">Enroll Now</button>
                                <button className="btn ml-4 btn-outline text-white">Learn More</button>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen bg-slider3">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-4xl">
                                <h1 className="mb-28 text-2xl lg:text-5xl font-bold leading-normal">Tailored to your individual needs and goals</h1>
                                <button onClick={() => navigate('/classes')} className="btn btn-primary">Enroll Now</button>
                                <button className="btn ml-4 btn-outline text-white">Learn More</button>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen bg-slider4">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-4xl">
                                <h1 className="mb-28 text-2xl lg:text-5xl font-bold leading-normal">Classes are backed by a satisfaction guarantee</h1>
                                <button onClick={() => navigate('/classes')} className="btn btn-primary">Enroll Now</button>
                                <button className="btn ml-4 btn-outline text-white">Learn More</button>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
<div className='hidden lg:block'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero min-h-screen bg-slider1">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-4xl">
                                <h1 className="mb-28 text-2xl lg:text-5xl font-bold leading-normal">Open up a world of possibilities</h1>
                                <button onClick={() => navigate('/classes')} className="btn btn-primary">Enroll Now</button>
                                <button className="btn ml-4 btn-outline text-white">Learn More</button>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen bg-slider2">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-4xl">
                                <h1 className="mb-28 text-2xl lg:text-5xl font-bold leading-normal">Easy-to-use and fun learning platform</h1>
                                <button onClick={() => navigate('/classes')} className="btn btn-primary">Enroll Now</button>
                                <button className="btn ml-4 btn-outline text-white">Learn More</button>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen bg-slider3">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-4xl">
                                <h1 className="mb-28 text-2xl lg:text-5xl font-bold leading-normal">Tailored to your individual needs and goals</h1>
                                <button onClick={() => navigate('/classes')} className="btn btn-primary">Enroll Now</button>
                                <button className="btn ml-4 btn-outline text-white">Learn More</button>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen bg-slider4">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-4xl">
                                <h1 className="mb-28 text-2xl lg:text-5xl font-bold leading-normal">Classes are backed by a satisfaction guarantee</h1>
                                <button onClick={() => navigate('/classes')} className="btn btn-primary">Enroll Now</button>
                                <button className="btn ml-4 btn-outline text-white">Learn More</button>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
</>
    );
};

export default Slider;