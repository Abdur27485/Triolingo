import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Primary = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        <ScrollRestoration></ScrollRestoration>
        </>
    );
};

export default Primary;