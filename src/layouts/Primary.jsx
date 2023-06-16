import React, { useState } from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Primary = () => {
    const [darkTheme, setDarkTheme] = useState(false)
    return (
        <div data-theme={darkTheme ? 'dark' : 'light'} >
        <Navbar themeToggleFn={setDarkTheme} themeToggle={darkTheme}></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Primary;