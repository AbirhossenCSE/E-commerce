import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import ProductCard from '../ProductCard/ProductCard';


const BestSellink = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://e-commerce-server-jade-six.vercel.app/product')
            .then(res => res.json())
            .then(data => {
                const sorted = data
                    .filter(product => product.totalSales !== undefined)
                    .sort((a, b) => b.totalSales - a.totalSales)
                    .slice(0, 5);
                setProducts(sorted);
            });
    }, []);

    return (
        <div className="my-12">
            <SectionTitle heading="Best Selling" subHeading="Check Our Best Selling Product!" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default BestSellink;
