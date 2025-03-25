import React from 'react';
import Banner from '../../components/Banner/Banner';
import Service from '../../components/HomePage/Service';

const Home = () => {
    return (
        <div className='w-10/12 mx-auto '>
            <Banner></Banner>
            <Service></Service>
        </div>
    );
};

export default Home;