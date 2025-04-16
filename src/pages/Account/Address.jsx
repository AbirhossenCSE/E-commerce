// import React from "react";

// const Address = () => {
//     return (
//         <div className="w-full p-6 bg-base-100 rounded-md shadow-md">
//             <h2 className="text-2xl font-bold mb-6">Address Form</h2>

//             <div className="mb-4">
//                 <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
//                     Full Name
//                 </label>
//                 <input
//                     type="text"
//                     id="fullName"
//                     placeholder="Enter full name"
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//                 />
//             </div>

//             <div className="mb-4">
//                 <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
//                     Email
//                 </label>
//                 <input
//                     type="email"
//                     id="email"
//                     placeholder="Enter email"
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//                 />
//             </div>

//             <div className="mb-4">
//                 <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
//                     Phone
//                 </label>
//                 <input
//                     type="tel"
//                     id="phone"
//                     placeholder="Enter phone number"
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//                 />
//             </div>

//             <div className="mb-4">
//                 <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">
//                     Division
//                 </label>
//                 <input
//                     type="text"
//                     id="state"
//                     placeholder="Enter state"
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//                 />
//             </div>

//             <div className="mb-4">
//                 <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
//                     City
//                 </label>
//                 <input
//                     type="text"
//                     id="city"
//                     placeholder="Enter city"
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//                 />
//             </div>

//             <div className="mb-6">
//                 <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
//                     Address
//                 </label>
//                 <textarea
//                     id="address"
//                     placeholder="Enter address"
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//                 />
//             </div>

//             <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none">
//                 Submit
//             </button>
//         </div>
//     );
// };

// export default Address;

import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../components/context/AuthContext";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Address = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: {
            division: "",
            city: "",
            address: "",
        },
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            if (user?.email) {
                try {
                    const res = await axiosPublic.get("/users");
                    const matchedUser = res.data.find(u => u.email === user.email);
                    if (matchedUser) {
                        setFormData({
                            name: matchedUser.name || "",
                            email: matchedUser.email || "",
                            phone: matchedUser.phone || "",
                            address: matchedUser.address || {
                                division: "",
                                city: "",
                                address: "",
                            },
                        });
                    }
                    setLoading(false);
                } catch (err) {
                    console.error("Failed to fetch user:", err);
                    setLoading(false);
                }
            }
        };

        fetchUser();
    }, [user, axiosPublic]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (["division", "city", "address"].includes(name)) {
            setFormData(prev => ({
                ...prev,
                address: {
                    ...prev.address,
                    [name]: value,
                },
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosPublic.patch(`/users/${formData.email}`, formData);
            console.log("Update successful:", res.data);
            alert("Profile updated successfully!");
        } catch (err) {
            console.error("Update failed:", err);
            alert("Something went wrong.");
        }
    };

    if (loading) return <p className="p-6 text-gray-500">Loading...</p>;

    return (
        <form onSubmit={handleSubmit} className="w-full p-6 bg-base-100 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6">Address Form</h2>

            <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
                    Full Name
                </label>
                <input
                    type="text"
                    id="fullName"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    className="w-full px-3 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
                    disabled
                />
            </div>

            <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                    Phone
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="division" className="block text-gray-700 text-sm font-bold mb-2">
                    Division
                </label>
                <input
                    type="text"
                    id="division"
                    name="division"
                    value={formData.address.division}
                    onChange={handleChange}
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
                    name="city"
                    value={formData.address.city}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                    Address
                </label>
                <textarea
                    id="address"
                    name="address"
                    value={formData.address.address}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                Submit
            </button>
        </form>
    );
};

export default Address;
