import React, { useEffect, useState, useRef } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import ProductCard from '../ProductCard/ProductCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 
const BestSellink = () => {
    const [products, setProducts] = useState([]);
    const sliderRef = useRef(null); 

    useEffect(() => {
        fetch('https://e-commerce-server-jade-six.vercel.app/product')
            .then(res => res.json())
            .then(data => {
                const sorted = data
                    .filter(product => product.totalSales !== undefined)
                    .sort((a, b) => b.totalSales - a.totalSales)
                    .slice(0, 6); 
                setProducts(sorted);
            });
    }, []);

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,         
        autoplaySpeed: 3000,    
        arrows: false,          
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            },
        ],
    };

    // Custom navigation 
    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className="my-12 px-4 relative">
            <SectionTitle heading="Best Selling" subHeading="Check Our Best Selling Product!" />
            
            {/* Navigation Buttons */}
            <div className="flex justify-end gap-4 mb-4">
                <button 
                    onClick={goToPrev}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                >
                    <FaArrowLeft />
                </button>
                <button 
                    onClick={goToNext}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                >
                    <FaArrowRight />
                </button>
            </div>

            {/* Slider */}
            <div className="slider-container relative">
                {products.length > 0 ? (
                    <Slider ref={sliderRef} {...settings}>
                        {products.map(product => (
                            <div key={product._id} className="px-2">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <p className="text-center">Loading products...</p>
                )}
            </div>
        </div>
    );
};

export default BestSellink;