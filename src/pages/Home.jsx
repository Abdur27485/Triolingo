import React from 'react';
import Slider from '../components/Home/Slider';
import Classes from '../components/Home/Classes';
import Instructors from '../components/Home/Instructors';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Classes></Classes>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;