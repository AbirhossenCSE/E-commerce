import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../components/context/AuthContext";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        dob: "",
        phone: "",
    });

    useEffect(() => {
        const fetchUserData = async () => {
            if (user?.email) {
                try {
                    const res = await axiosPublic.get("/users");
                    const matchedUser = res.data.find(u => u.email === user.email);
                    setUserData(matchedUser);

                    setFormData({
                        name: matchedUser?.name || "",
                        dob: matchedUser?.dob || "",
                        phone: matchedUser?.phone || "",
                    });

                    setLoading(false);
                } catch (error) {
                    console.error("Failed to fetch user info:", error);
                    setLoading(false);
                }
            }
        };

        fetchUserData();
    }, [user, axiosPublic]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosPublic.patch(`/users/${user.email}`, formData);
            if (res.data?.result?.modifiedCount > 0) {
                Swal.fire({
                    icon: "success",
                    title: "Profile updated!",
                    toast: true,
                    timer: 3000,
                    position: "top-end",
                    showConfirmButton: false
                });
            } else {
                Swal.fire({
                    icon: "info",
                    title: "No changes made",
                    toast: true,
                    timer: 3000,
                    position: "top-end",
                    showConfirmButton: false
                });
            }
        } catch (error) {
            console.error("Update failed:", error);
            Swal.fire({
                icon: "error",
                title: "Failed to update",
                toast: true,
                timer: 3000,
                position: "top-end",
                showConfirmButton: false
            });
        }
    };

    if (loading) return <p className="p-6">Loading...</p>;

    return (
        <form onSubmit={handleSubmit} className="w-11/12 mx-auto p-6 bg-base-100 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6">Update Profile</h2>

            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-bold mb-2">
                    Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData?.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={userData?.email}
                    readOnly
                    className="w-full px-3 py-2 bg-base-100 border rounded-md"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="dob" className="block text-sm font-bold mb-2">
                    Date of Birth
                </label>
                <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData?.dob}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-bold mb-2">
                    Phone
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData?.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
                Update Profile
            </button>
        </form>
    );
};

export default UpdateProfile;
