import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import ProductCard from '../ProductCard/ProductCard';


const NewArrival = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                // Sort by postedDate DESC and take only the latest 6
                const sorted = [...data].sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
                setProducts(sorted.slice(0, 5));
            });
    }, []);

    return (
        <div className="my-10">
            <SectionTitle heading='New Arrival' subHeading='Check & Get Your Desired Product!' />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default NewArrival;
