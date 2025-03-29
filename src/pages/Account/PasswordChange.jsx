import React from "react";

const PasswordChange = () => {
    return (
        <div className="w-4/5 mx-auto p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6">Change Password</h2>

            <div className="mb-4">
                <label htmlFor="currentPassword" className="block text-gray-700 text-sm font-bold mb-2">
                    Current Password
                </label>
                <input
                    type="password"
                    id="currentPassword"
                    placeholder="Enter current password"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="newPassword" className="block text-gray-700 text-sm font-bold mb-2">
                    New Password
                </label>
                <input
                    type="password"
                    id="newPassword"
                    placeholder="Enter new password"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
                    Confirm Password
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm new password"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>

            <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                Update
            </button>
        </div>
    );
};

export default PasswordChange;