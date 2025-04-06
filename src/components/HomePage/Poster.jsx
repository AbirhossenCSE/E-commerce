import React from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const Poster = () => {
    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-800 rounded-lg px-10 py-10 my-6 flex flex-col md:flex-row items-center justify-between text-white gap-6">
            <div className="flex items-center gap-4">
                <div className="bg-white text-cyan-600 p-3 rounded-full">
                    <FaMapMarkerAlt size={24} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold">20+ Physical Stores</h2>
                    <p className="text-sm">Visit Our Store & Get Your Desired Tiles Product!</p>
                </div>
            </div>

            {/* Button */}
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition">
                Find Our Store <FaSearch />
            </button>
        </div>
    );
};

export default Poster;
