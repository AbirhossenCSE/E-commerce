import React from "react";

const UpdateProfile = () => {
    return (
        <div className="w-full p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6">Update Profile</h2>

            <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
                    Full Name
                </label>
                <input
                    type="text"
                    id="fullName"
                    placeholder="Enter your full name"
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
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="dob" className="block text-gray-700 text-sm font-bold mb-2">
                    Date of Birth
                </label>
                <input
                    type="date"
                    id="dob"
                    placeholder="mm/dd/yyyy"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                    Phone
                </label>
                <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>

            <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                Update Profile
            </button>
        </div>
    );
};

export default UpdateProfile;