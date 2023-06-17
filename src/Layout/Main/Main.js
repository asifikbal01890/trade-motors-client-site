import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import ScrollToTop from '../../Pages/ScrollToTop/ScrollToTop';

const Main = () => {
    return (
        <div className=' relative'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollToTop></ScrollToTop>
        </div>
    );
};

export default Main;