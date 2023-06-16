import React from 'react';
import Slider from '../components/Home/Slider';
import Classes from '../components/Home/Classes';
import Instructors from '../components/Home/Instructors';
import Activities from '../components/Home/Activities';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Classes></Classes>
            <Instructors></Instructors>
            <Activities></Activities>
        </div>
    );
};

export default Home;