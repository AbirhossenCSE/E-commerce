import React from 'react';
import { FaSearch, FaCommentAlt, FaHeadset, FaTools } from 'react-icons/fa';

const services = [
    { icon: <FaSearch className="text-white text-3xl" />, title: "Product Finder", description: "Find Your Product Easily" },
    { icon: <FaCommentAlt className="text-white text-3xl" />, title: "Raise a Complain", description: "Share your experience" },
    { icon: <FaHeadset className="text-white text-3xl" />, title: "Online Support", description: "Get Online Support" },
    { icon: <FaTools className="text-white text-3xl" />, title: "Servicing Center", description: "Repair Your Product" },
];

const Service = () => {
    return (
        <div className="w-full flex flex-wrap justify-between gap-6 p-6 bg-gray-100">
            {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md px-10 py-4 flex items-center gap-4">
                    <div className="bg-black rounded-full p-3 flex items-center justify-center">
                        {service.icon}
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Service;
