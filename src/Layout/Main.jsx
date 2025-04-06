import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Home from '../pages/Home/Home';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default Main;