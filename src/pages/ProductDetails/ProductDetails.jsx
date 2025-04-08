import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { FaStar } from 'react-icons/fa';
import Footer from '../../components/Footer/Footer';

const ProductDetails = () => {
    const { state } = useLocation();
    const product = state?.product;

    const originalPrice = (product.price * 1.15).toFixed(0);
    const saved = (originalPrice - product.price).toFixed(0);

    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        if (quantity < product.quantity) {
            setQuantity(quantity + 1);
        }
    };

    const totalPrice = (product.price * quantity).toFixed(2);

    return (
        <div>
            <Navbar />
            <div className="max-w-6xl mx-auto bg-base-300 p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-md rounded-lg p-6">
                    {/* Product Image */}
                    <div className="flex justify-center shadow-xl items-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-[350px] object-contain rounded-md"
                        />
                    </div>

                    {/* Product Info */}
                    <div className='shadow-md p-4'>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
                        <p className="text-gray-600 mb-4">
                        {product.description}
                        </p>

                        {/* Rating */}
                        <div className="flex items-center gap-1 text-yellow-500 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>

                        {/* Pricing */}
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-2xl font-bold text-black">{product.price}৳</span>
                            <span className="line-through text-gray-400">{originalPrice}৳</span>
                            <span className="text-sm text-green-500">Save {saved}৳</span>
                        </div>

                        {/* Delivery Info */}
                        <div className="border rounded-md p-4 bg-gray-50 mb-4">
                            <p className="text-sm font-medium text-black">Free While Global Delivery</p>
                            <p className="text-xs text-gray-600">Get it in 1–2 weeks to <span className="text-red-500">12345</span></p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center border rounded-full px-4 py-2">
                                <button
                                    onClick={handleDecrease}
                                    className="text-xl px-2 font-bold disabled:opacity-50"
                                    disabled={quantity <= 1}
                                >
                                    -
                                </button>
                                <span className="px-2">{quantity}</span>
                                <button
                                    onClick={handleIncrease}
                                    className="text-xl px-2 font-bold disabled:opacity-50"
                                    disabled={quantity >= product.quantity}
                                >
                                    +
                                </button>
                            </div>
                            <span className="text-gray-700 font-medium">Total: {totalPrice}৳</span>
                        </div>

                        {/* Add to Cart */}
                        <button className="bg-black text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-800">
                            Add to Cart
                        </button>

                        {/* Stock Info */}
                        <p className="text-sm text-gray-500 mt-2">
                            Available stock: {product.quantity}
                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;
