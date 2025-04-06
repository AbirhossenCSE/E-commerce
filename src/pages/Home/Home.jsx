import React from 'react';
import Banner from '../../components/Banner/Banner';
import Service from '../../components/HomePage/Service';
import FeaturedCategory from '../../components/HomePage/FeaturedCategory';
import Poster from '../../components/HomePage/Poster';
import FeaturedProducts from '../../components/HomePage/FeaturedProducts';

const Home = () => {
    return (
        <div className='w-10/12 mx-auto '>
            <Banner></Banner>
            <Service></Service>
            <FeaturedCategory></FeaturedCategory>
            <Poster></Poster>
            <FeaturedProducts></FeaturedProducts>
        </div>
    );
};

export default Home;