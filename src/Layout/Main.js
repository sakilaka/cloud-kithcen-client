import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';
import Navber from '../component/Navber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;