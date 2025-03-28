
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowProduct = () => {
    const { category } = useParams(); // Get category from URL
    const [products, setProducts] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    // Fetch products
    useEffect(() => {
        fetch("/menu.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    // Set the default selected category from URL
    useEffect(() => {
        if (category) {
            setSelectedCategories([decodeURIComponent(category)]);
        }
    }, [category]);

    // Extract unique categories
    const categories = [...new Set(products.map((product) => product.category))];

    // Handle category selection
    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
    };

    // Filter products based on selected categories
    const filteredProducts =
        selectedCategories.length === 0
            ? products
            : products.filter((product) => selectedCategories.includes(product.category));

    return (
        <div className="container mx-auto py-10 flex gap-8">
            {/* Sidebar - Category Filters */}
            <div className="w-1/4 p-4 border-r">
                <h2 className="text-xl font-bold mb-4">Filter by Category</h2>
                {categories.map((cat) => (
                    <div key={cat} className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id={cat}
                            className="mr-2"
                            checked={selectedCategories.includes(cat)}
                            onChange={() => handleCategoryChange(cat)}
                        />
                        <label htmlFor={cat} className="cursor-pointer">{cat}</label>
                    </div>
                ))}
            </div>

            {/* Product Display */}
            <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product._id} className="p-5 bg-white shadow-lg rounded-lg">
                            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
                            <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
                            <p className="text-gray-500 text-sm">{product.description}</p>
                            <p className="text-orange-500 font-bold mt-2">${product.price}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No products available for selected categories.</p>
                )}
            </div>
        </div>
    );
};

export default ShowProduct;
