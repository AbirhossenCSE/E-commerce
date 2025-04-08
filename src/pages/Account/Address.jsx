import React from "react";

const Address = () => {
    return (
        <div className="w-full p-6 bg-base-100 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6">Address Form</h2>

            <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
                    Full Name
                </label>
                <input
                    type="text"
                    id="fullName"
                    placeholder="Enter full name"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                    Phone
                </label>
                <input
                    type="tel"
                    id="phone"
                    placeholder="Enter phone number"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">
                    State
                </label>
                <input
                    type="text"
                    id="state"
                    placeholder="Enter state"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
                    City
                </label>
                <input
                    type="text"
                    id="city"
                    placeholder="Enter city"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                    Address
                </label>
                <textarea
                    id="address"
                    placeholder="Enter address"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>

            <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                Submit
            </button>
        </div>
    );
};

export default Address;