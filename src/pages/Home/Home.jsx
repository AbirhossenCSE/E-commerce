import React from 'react';
import Banner from '../../components/Banner/Banner';
import Service from '../../components/HomePage/Service';
import FeaturedCategory from '../../components/HomePage/FeaturedCategory';

const Home = () => {
    return (
        <div className='w-10/12 mx-auto '>
            <Banner></Banner>
            <Service></Service>
            <FeaturedCategory></FeaturedCategory>
        </div>
    );
};

export default Home;