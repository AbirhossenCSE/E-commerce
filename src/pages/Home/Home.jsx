import React from 'react';
import Banner from '../../components/Banner/Banner';
import Service from '../../components/HomePage/Service';
import FeaturedCategory from '../../components/HomePage/FeaturedCategory';
import Poster from '../../components/HomePage/Poster';
import FeaturedProducts from '../../components/HomePage/FeaturedProducts';
import NewArrival from '../../components/HomePage/NewArrival';
import BestSellink from '../../components/HomePage/BestSellink';
import Delevary from '../../components/HomePage/Delevary';
import OurPartner from '../../components/HomePage/OurPartner';

const Home = () => {
    return (
        <div className='w-10/12 mx-auto '>
            <Banner></Banner>
            <Service></Service>
            <FeaturedCategory></FeaturedCategory>
            <Poster></Poster>
            <FeaturedProducts></FeaturedProducts>
            <NewArrival></NewArrival>
            <Delevary></Delevary>
            <BestSellink></BestSellink>
            <OurPartner></OurPartner>
        </div>
    );
};

export default Home;