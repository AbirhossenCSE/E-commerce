import React, { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaCodeCompare } from 'react-icons/fa6';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import AuthContext from '../context/AuthContext';
import { GiInjustice } from 'react-icons/gi';

const ProductCard = ({ product }) => {
    const originalPrice = (product.price * 1.15).toFixed(0);
    const saved = (originalPrice - product.price).toFixed(0);
    const { user } = useContext(AuthContext);

    const showToast = (icon, message) => {
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: icon,
            title: message,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });
    };

    const handleAddToWishlist = async () => {
        if (!user) return showToast('warning', 'Please log in to add to wishlist.');
        const wishlistItem = {
            productId: product._id,
            name: product.name,
            image: product.image,
            price: product.price,
            originalPrice,
            saved,
            userName: user.displayName,
            userEmail: user.email,
        };

        try {
            const response = await axios.post('https://e-commerce-server-jade-six.vercel.app/withlist', wishlistItem);
            if (response.data.message === 'Already in wishlist') {
                showToast('info', 'Already in your wishlist.');
            } else if (response.status === 201) {
                showToast('success', 'Added to wishlist!');
            }
        } catch (error) {
            console.error('Error adding to wishlist:', error);
            showToast('error', 'Something went wrong.');
        }
    };

    const handleAddToCompare = async () => {
        if (!user) return showToast('warning', 'Please log in to compare products.');
        const compareItem = {
            productId: product._id,
            name: product.name,
            image: product.image,
            price: product.price,
            originalPrice,
            saved,
            userName: user.displayName,
            userEmail: user.email,
        };

        try {
            const response = await axios.post('https://e-commerce-server-jade-six.vercel.app/compare', compareItem);
            if (response.data.message === 'Already in compare list') {
                showToast('info', 'Already in compare list.');
            } else if (response.status === 201) {
                showToast('success', 'Added to compare list!');
            }
        } catch (error) {
            console.error('Error adding to compare list:', error);
            showToast('error', 'Something went wrong.');
        }
    };

    return (
        <div className="bg-base-100 p-3 rounded-2xl shadow-md relative">
            <div className="text-xs text-gray-400 absolute top-2 right-4">
                id: {product._id?.slice(-8)}
            </div>

            <Link to="/product-details" state={{ product }}>
                <div className="relative cursor-pointer">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-56 object-contain rounded-xl bg-white mt-6"
                    />
                    <div className="absolute top-3 right-3 flex flex-col items-center gap-3">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                handleAddToCompare();
                            }}
                            className="bg-white p-2 rounded-full shadow hover:bg-blue-100"
                            title="Compare"
                        >
                            <GiInjustice className="text-blue-500 text-lg" />
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                handleAddToWishlist();
                            }}
                            className="bg-white p-2 rounded-full shadow hover:bg-red-100"
                            title="Add to Wishlist"
                        >
                            <FaHeart className="text-gray-700 text-lg" />
                        </button>
                    </div>
                </div>
            </Link>

            <div className="mt-3 space-y-2">
                <h2 className="font-bold text-base">{product.name}</h2>
                <div className="flex items-center text-yellow-500 gap-1 text-sm">
                    {'★'.repeat(Math.round(product.rating || 5))}
                    <span className="text-gray-400 ml-1">({product.reviews || 97})</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="line-through text-gray-400 text-sm">{originalPrice}৳</span>
                    <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-0.5 rounded">
                        -10%
                    </span>
                </div>
                <div className="text-lg font-bold text-gray-900">{product.price}<strong>৳</strong> </div>
                <div className="flex justify-between items-center mt-3">
                    <Link to="/product-details" state={{ product }} className="text-sm text-blue-500 hover:underline">
                        See Details
                    </Link>
                    <button className="bg-blue-600 hover:bg-blue-800 text-white p-2 rounded-full">
                        <FaCartShopping className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
