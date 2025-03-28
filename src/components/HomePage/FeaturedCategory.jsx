import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";

const FeaturedCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("categories.json")
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    return (
        <div className="container mx-auto py-10">
            {/* Section Title */}
            <SectionTitle
                heading="Featured Category"
                subHeading="Get Your Desired Product from Featured Category!"
            />

            {/* Category Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
                {categories.map((cat) => (
                    <div
                        key={cat.category_id}
                        className="p-5 bg-white shadow-lg rounded-lg flex flex-col items-center cursor-pointer hover:shadow-xl transition"
                    >
                        {/* <img src={cat.icon} alt={cat.category} className="w-20 h-20 object-contain" />
                        <h3 className="text-lg font-semibold mt-3">{cat.category}</h3> */}
                        <Link to={`/order`}>
                            <img src={cat.icon} alt={cat.category} className="w-20 h-20 object-contain" />
                            <h3 className="text-lg font-semibold mt-3">{cat.category}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCategory;
