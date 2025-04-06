import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { BiRefresh } from 'react-icons/bi';

const Delevary = () => {
    return (
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-6 rounded-xl shadow-xl my-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-10 md:gap-6">
                {/* Left Text Section */}
                <div className="flex-1 text-center flex flex-col justify-center h-full">
                    <h2 className="text-3xl font-bold mb-3 text-red-500">
                        FAST & RELIABLE DELIVERY
                    </h2>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-300">
                        Get Your Furniture Within <span className="text-5xl text-yellow-400 font-extrabold">48</span> Hours!
                    </h3>
                    <p className="text-lg mb-4 text-gray-400">
                        Enjoy swift delivery across the nation.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                        <span className="bg-yellow-500 text-gray-900 py-2 px-6 rounded-full font-semibold hover:bg-yellow-600 transition duration-300">
                            Cash on Delivery (COD)
                        </span>
                        <span className="bg-green-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-green-600 transition duration-300">
                            Easy 7-Day Returns
                        </span>
                    </div>
                    <div className="flex items-center justify-center gap-3 mt-4 text-gray-400">
                        <BiRefresh className="text-xl text-yellow-400" />
                        <span className="text-sm font-semibold">7 Days Easy Return & Exchange</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 mt-2 text-gray-400">
                        <FaPhoneAlt className="text-yellow-400" />
                        <span className="font-semibold">Customer Support: <span className="text-yellow-400">01234-567890</span></span>
                    </div>
                    <div className="mt-3 text-sm text-gray-400">
                        Visit us: <a href="https://www.earlybd.net" target="_blank" rel="noreferrer" className="underline text-blue-400 hover:text-blue-300 transition duration-300">www.website.bd</a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/3 mt-8 md:mt-0">
                    <img
                        src="https://i.ibb.co/s9QW9Zty/way-concept-illustration-114360-1191.jpg"
                        alt="Fast Delivery"
                        className="rounded-md shadow-md w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Delevary;

