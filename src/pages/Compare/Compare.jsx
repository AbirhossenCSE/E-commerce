import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import AuthContext from '../../components/context/AuthContext';
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa';

const Compare = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const [compareItems, setCompareItems] = useState([]);

    useEffect(() => {
        const fetchCompareItems = async () => {
            try {
                const res = await axiosPublic.get('http://localhost:5000/compare');
                const allItems = res.data;
                const filtered = allItems.filter(item => item.userEmail === user?.email);
                setCompareItems(filtered);
            } catch (error) {
                console.error('Error fetching compare items:', error);
            }
        };

        if (user?.email) {
            fetchCompareItems();
        }
    }, [user?.email, axiosPublic]);

    const handleRemove = async (id) => {
        try {
            await axiosPublic.delete(`http://localhost:5000/compare/${id}`);
            setCompareItems(prev => prev.filter(item => item._id !== id));
        } catch (error) {
            console.error('Error deleting item:', error);
            alert('Failed to delete item. Please try again.');
        }
    };

    return (
        <div>
            <Navbar />

            <div className='w-9/12 mx-auto mt-10'>
                <h2 className="text-4xl font-bold mb-6 ">Compare Products</h2>

                {compareItems.length === 0 ? (
                    <p className="text-center text-gray-500">No items in compare list.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {compareItems.map(item => (
                            <div key={item._id} className="bg-white p-4 rounded-lg shadow-lg flex flex-col">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-40 w-full object-cover rounded-md mb-4"
                                />
                                <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                                <p className="text-blue-600 font-bold mb-1">{item.price}৳</p>
                                <p className="text-sm text-gray-500 line-through mb-1">Original: {item.originalPrice}৳</p>
                                <p className="text-green-600 text-sm mb-3">You save: {item.saved}৳</p>

                                <div className="mt-auto flex justify-between items-center">
                                    <button
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2"
                                        onClick={() => alert('Added to cart! (implement logic)')}
                                    >
                                        <FaShoppingCart /> Add to Cart
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center gap-2"
                                        onClick={() => handleRemove(item._id)}
                                    >
                                        <FaTrashAlt /> Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Compare;