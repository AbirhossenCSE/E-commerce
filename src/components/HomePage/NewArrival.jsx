import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import ProductCard from '../ProductCard/ProductCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const NewArrival = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://e-commerce-server-jade-six.vercel.app/product')
            .then(res => res.json())
            .then(data => {
                const sorted = [...data].sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
                setProducts(sorted.slice(0, 8));
            });
    }, []);

    // Custom arrow button styles using CSS-in-JS
    const arrowButtonStyle = {
        '--swiper-navigation-color': '#1e293b',
        '--swiper-navigation-size': '30px',
        '&:hover': {
            '--swiper-navigation-color': '#3b82f6',
        },
        '&.swiper-button-disabled': {
            opacity: 0.3,
            cursor: 'default',
            pointerEvents: 'none',
        },
    };

    return (
        <div className="my-10">
            <SectionTitle heading='New Arrival' subHeading='Check & Get Your Desired Product!' />

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={5}
                navigation={{
                    prevEl: '.swiper-button-prev-new-arrival',
                    nextEl: '.swiper-button-next-new-arrival',
                }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 5 }
                }}
                className="new-arrival-swiper"
            >
                {products.map(product => (
                    <SwiperSlide key={product._id}>
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
                {/* Custom Navigation Arrows */}
                <div
                    className="swiper-button-prev swiper-button-prev-new-arrival"
                    style={arrowButtonStyle}
                >
                    <ChevronLeft className="h-6 w-6" />
                </div>
                <div
                    className="swiper-button-next swiper-button-next-new-arrival"
                    style={arrowButtonStyle}
                >
                    <ChevronRight className="h-6 w-6" />
                </div>
            </Swiper>
        </div>
    );
};

export default NewArrival;
