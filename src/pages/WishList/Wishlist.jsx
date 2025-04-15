import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrashAlt, FaCartPlus } from 'react-icons/fa';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/withlist')
            .then(res => setWishlist(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleRemove = async (id) => {
        const confirm = window.confirm("Are you sure you want to remove this item?");
        if (confirm) {
            try {
                await axios.delete(`http://localhost:5000/withlist/${id}`);
                setWishlist(prev => prev.filter(item => item._id !== id));
            } catch (error) {
                console.error("Failed to delete wishlist item", error);
            }
        }
    };
    

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6">Wishlist</h2>
            <div className="grid gap-4">
                {wishlist.map(item => (
                    <div key={item._id} className="bg-white shadow-md rounded-lg flex flex-col md:flex-row items-center p-4">
                        <img src={item.image} alt={item.name} className="w-32 h-32 object-contain mb-4 md:mb-0 md:mr-6" />
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl font-semibold">{item.name}</h3>
                            <p className="text-gray-700">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-6">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2">
                                <FaCartPlus /> Add to Cart
                            </button>
                            <button
                                onClick={() => handleRemove(item._id)}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2"
                            >
                                <FaTrashAlt /> Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
