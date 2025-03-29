
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { GiLoveHowl } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";

const ShowProduct = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [sortOrder, setSortOrder] = useState("default");
    const [priceRange, setPriceRange] = useState([1, 3000]);

    useEffect(() => {
        fetch("/menu.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    useEffect(() => {
        if (category) {
            setSelectedCategories([decodeURIComponent(category)]);
        }
    }, [category]);

    const categories = [...new Set(products.map((product) => product.category))];

    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
    };

    const handlePriceChange = (newRange) => {
        setPriceRange(newRange);
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    // Filter products by category and price range
    let filteredProducts = products.filter((product) => {
        const isInCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const isInPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
        return isInCategory && isInPriceRange;
    });

    // Sorting logic
    if (sortOrder === "h-to-l") {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "l-to-h") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    return (
        <div>
            <Navbar />
            <div className="container w-10/12 mx-auto py-10 flex gap-8">
                {/* Sidebar - Category & Price Filters */}
                <div className="w-1/4 p-4 border-r">

                    {/* Price Range Filter */}
                    <div className="mt-6">
                        <h2 className="text-xl font-bold mb-4">Price Range</h2>
                        <p className="mb-2 font-semibold">
                            Price: ${priceRange[0]} - ${priceRange[1]}
                        </p>
                        <Slider
                            range
                            min={1}
                            max={3000}
                            step={50}
                            value={priceRange}
                            onChange={handlePriceChange}
                            trackStyle={[{ backgroundColor: "blue", height: 6 }]}
                            handleStyle={[
                                { backgroundColor: "white", border: "2px solid blue", width: 16, height: 16 },
                                { backgroundColor: "white", border: "2px solid blue", width: 16, height: 16 },
                            ]}
                        />
                        <div className="flex justify-between mt-2 text-sm">
                            <span>Min - ${priceRange[0]}</span>
                            <span>Max - ${priceRange[1]}</span>
                        </div>
                    </div>


                    <h2 className="text-xl font-bold my-4">Filter by Category</h2>
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

                {/* Right Section - Sorting & Products */}
                <div className="w-3/4">
                    {/* Sorting Options */}
                    <div className="flex justify-end mb-4">
                        <select
                            className="p-2 border rounded"
                            value={sortOrder}
                            onChange={handleSortChange}
                        >
                            <option value="default">Default</option>
                            <option value="h-to-l">Price: High to Low</option>
                            <option value="l-to-h">Price: Low to High</option>
                        </select>
                    </div>

                    {/* Product Display */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <div key={product._id} className="p-5 bg-white shadow-lg rounded-lg">
                                    <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
                                    <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
                                    <p className="text-gray-500 text-sm">{product.description}</p>
                                    <p className="text-orange-500 font-bold mt-2">${product.price}</p>

                                    <div className="flex gap-2">
                                        <p><FaHeart /></p>
                                        <p><FaCodeCompare /></p>
                                    </div>
                                    <button>See Details</button>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No products available for selected filters.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowProduct;
