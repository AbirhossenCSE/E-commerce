// src/components/ProductCard/ProductCard.jsx

import React from "react";
import { FaHeart, FaMusic } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const { name, image, price, description } = product;

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden border">
            <div className="relative">
                <img src={image} alt={name} className="w-full h-60 object-cover" />
                <span className="absolute top-2 left-2 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
                    save:650৳
                </span>
            </div>
            <div className="p-4">
                <h3 className="text-md font-semibold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-600 mb-2">{description}</p>
                <div className="flex items-center space-x-3 mb-3">
                    <span className="text-xl font-bold text-blue-700">{price}৳</span>
                    <span className="text-sm line-through text-gray-400">9650৳</span>
                </div>
                <div className="flex items-center space-x-4 text-blue-700">
                    <FaHeart className="text-xl cursor-pointer" />
                    <FaMusic className="text-xl cursor-pointer" />
                    <button className="text-sm font-semibold underline">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
