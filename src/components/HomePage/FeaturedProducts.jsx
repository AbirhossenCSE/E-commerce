import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProductCard from "../ProductCard/ProductCard";


const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://e-commerce-server-jade-six.vercel.app/product")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="mx-auto">
            <SectionTitle
                heading="Featured Products"
                subHeading="Check & Get Your Desired Product!"
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
