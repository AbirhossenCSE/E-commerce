import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";

const FeaturedCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("/menu.json")
            .then((res) => res.json())
            .then((data) => {
                // Extract unique categories
                const uniqueCategories = [];
                const categorySet = new Set();

                data.forEach((cat) => {
                    if (!categorySet.has(cat.category)) {
                        categorySet.add(cat.category);
                        uniqueCategories.push(cat);
                    }
                });

                setCategories(uniqueCategories);
            });
    }, []);

    return (
        <div className="container mx-auto py-10">
            <SectionTitle
                heading="Featured Category"
                subHeading="Get Your Desired Product from Featured Category!"
            />

            {/* Category Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
                {categories.map((cat) => (
                    <Link key={cat._id} to={`/products/${encodeURIComponent(cat.category)}`}>
                        <div className="p-5 bg-white shadow-lg rounded-lg flex flex-col items-center cursor-pointer hover:shadow-xl transition">
                            <img src={cat.icon} alt={cat.category} className="w-20 h-20 object-contain" />
                            <h3 className="text-lg mt-3">{cat.category}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCategory;
