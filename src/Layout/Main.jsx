import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Home from '../pages/Home/Home';

const Main = () => {
    return (
        <div>
            <div className='bg-white lg:bg-black'>
                <Navbar></Navbar>
            </div>
            <Home></Home>
        </div>
    );
};

export default Main;