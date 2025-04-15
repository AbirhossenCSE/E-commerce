// import React from 'react';
// import { FaHeart, FaLink } from 'react-icons/fa';
// import { FaCodeCompare } from 'react-icons/fa6';
// import { Link } from 'react-router-dom';

// const ProductCard = ({ product }) => {
//     const originalPrice = (product.price * 1.15).toFixed(0);
//     const saved = (originalPrice - product.price).toFixed(0);

//     return (
//         <div className="bg-white rounded-lg shadow-xl hover:scale-105 duration-300 overflow-hidden relative">
//             <div className="absolute top-2 left-0 bg-purple-500 text-white text-sm px-4 py-2 rounded-r-full z-10">
//                 save: {saved}৳
//             </div>
//             <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />

//             {/* Product Info */}
//             <div className="p-4">
//                 <h3 className="text-md font-semibold text-gray-800 mb-1">{product.name}</h3>
//                 {/* <p className="text-sm text-gray-500 mb-2">{product.description?.slice(0, 50)}...</p> */}

//                 <div className="flex items-center gap-2">
//                     <span className="text-xl font-bold text-blue-600">{product.price}৳</span>
//                     <span className="line-through text-gray-400 text-sm">{originalPrice}৳</span>
//                 </div>

//                 <div className="mt-4 flex items-center justify-between text-blue-500">
//                     <div className="flex gap-3 text-lg">
//                         <FaHeart className="cursor-pointer text-2xl hover:text-red-500" />
//                         <FaCodeCompare className="cursor-pointer text-2xl hover:text-gray-600" />
//                     </div>
//                     <Link
//                         to="/product-details"
//                         state={{ product }}
//                         className="font-medium hover:underline"
//                     >
//                         See Details
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductCard;


import React, { useContext } from 'react';
import { FaHeart, FaLink } from 'react-icons/fa';
import { FaCodeCompare } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const ProductCard = ({ product }) => {
    const originalPrice = (product.price * 1.15).toFixed(0);
    const saved = (originalPrice - product.price).toFixed(0);
    const { user } = useContext(AuthContext);


    const handleAddToWishlist = async () => {
        if (!user) return alert("Please log in to add to wishlist.");

        const wishlistItem = {
            ...product,
            productId: product._id, // unique check
            userName: user.displayName,
            userEmail: user.email
        };

        try {
            const response = await axios.post('http://localhost:5000/withlist', wishlistItem);

            if (response.data.message === "Already in wishlist") {
                alert("This product is already in your wishlist.");
            } else if (response.status === 201) {
                alert("Product added to wishlist!");
            }

        } catch (error) {
            console.error("Error adding to wishlist:", error);
            alert("Something went wrong. Please try again.");
        }
    };



    return (
        <div className="bg-white rounded-lg shadow-xl hover:scale-105 duration-300 overflow-hidden relative">
            <div className="absolute top-2 left-0 bg-purple-500 text-white text-sm px-4 py-2 rounded-r-full z-10">
                save: {saved}৳
            </div>
            <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />

            {/* Product Info */}
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
                        <FaCodeCompare className="cursor-pointer text-2xl hover:text-gray-600" />
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
