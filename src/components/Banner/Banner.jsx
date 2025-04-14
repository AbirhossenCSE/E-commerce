import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../assets/home/01.jpg';
import img2 from '../../assets/home/02.jpg';
import img3 from '../../assets/home/03.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='my-10 md:flex gap-6'>
            {/* Left - Carousel */}
            <div className='md:w-2/3 h-full flex'>
                <div className="w-full h-full">
                    <Carousel
                        autoPlay
                        infiniteLoop
                        showThumbs={false}
                        showStatus={false}
                        interval={3000}
                        transitionTime={800}
                    >
                        <div>
                            <img src={img1} className="shadow-lg h-full object-cover" alt="Furniture 1" />
                        </div>
                        <div>
                            <img src={img2} className="shadow-lg h-full object-cover" alt="Furniture 2" />
                        </div>
                        <div>
                            <img src={img3} className="shadow-lg h-full object-cover" alt="Furniture 3" />
                        </div>
                    </Carousel>
                </div>
            </div>

            {/* Right Section not fixed*/}
            <div className='md:w-1/3 flex flex-col justify-between h-[500px] space-y-4'>
                <div className='p-6 h-full bg-base-200 rounded-sm shadow-md flex-1 flex flex-col'>
                    <h1 className='font-bold text-3xl mb-3'>Choose Your Furniture Here</h1>
                    <p className='flex-grow'>
                        Discover a wide range of high-quality furniture pieces that enhance the beauty and comfort of your home.
                    </p>
                    <button className='btn btn-neutral mt-4'>
                        <Link to={'/products'}>Purchase Now</Link>
                    </button>
                </div>
                <div className='h-full md:hidden lg:flex'>
                    <img className='w-full h-full object-cover rounded-sm shadow-md' src={img1} alt="Furniture Preview" />
                </div>
            </div>

        </div>
    );
};

export default Banner;

