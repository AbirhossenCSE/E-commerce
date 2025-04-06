import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProductCard from "../ProductCard/ProductCard";


const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/menu.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="container mx-auto px-4">
            <SectionTitle
                heading="Featured Products"
                subHeading="Check & Get Your Desired Product!"
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
