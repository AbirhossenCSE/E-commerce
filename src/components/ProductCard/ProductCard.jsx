import React, { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaCodeCompare } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import AuthContext from '../context/AuthContext';

const ProductCard = ({ product }) => {
    const originalPrice = (product.price * 1.15).toFixed(0);
    const saved = (originalPrice - product.price).toFixed(0);
    const { user } = useContext(AuthContext);

    // SweetAlert toast config
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
        <div className="bg-white rounded-lg shadow-xl hover:scale-105 duration-300 overflow-hidden relative">
            <div className="absolute top-2 left-0 bg-purple-500 text-white text-sm px-4 py-2 rounded-r-full z-10">
                save: {saved}৳
            </div>

            <Link to="/product-details" state={{ product }}>
                <img src={product.image} alt={product.name} className="w-full h-56 object-cover cursor-pointer" />
            </Link>


            <div className="p-4">
                <h3 className="text-md font-semibold text-gray-800 mb-1">{product.name}</h3>
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-blue-600">{product.price}৳</span>
                    <span className="line-through text-gray-400 text-sm">{originalPrice}৳</span>
                </div>
                <div className="mt-4 flex items-center justify-between text-blue-500">
                    <div className="flex gap-3 text-lg">
                        <FaHeart
                            onClick={handleAddToWishlist}
                            className="cursor-pointer text-2xl hover:text-red-500"
                        />
                        <FaCodeCompare
                            onClick={handleAddToCompare}
                            className="cursor-pointer text-2xl hover:text-gray-600"
                        />
                    </div>
                    <Link
                        to="/product-details"
                        state={{ product }}
                        className="font-medium hover:underline"
                    >
                        See Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
