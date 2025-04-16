import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../components/context/AuthContext";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AccountInfo = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            if (user?.email) {
                try {
                    const res = await axiosPublic.get("/users");
                    const matchedUser = res.data.find(
                        (u) => u.email === user.email
                    );
                    setUserData(matchedUser);
                    setLoading(false);
                } catch (error) {
                    console.error("Failed to fetch user info:", error);
                    setLoading(false);
                }
            }
        };

        fetchUserData();
    }, [user, axiosPublic]);

    if (loading) return <p className="p-6 text-gray-500">Loading...</p>;

    if (!userData) return <p className="p-6 text-red-500">No user data found.</p>;

    return (
        <div className="p-6 rounded-xl space-y-4">
            <h2 className="text-3xl font-bold  text-blue-600">Account Information</h2>
            <div className="flex flex-col space-y-2">
                <h3 className="text-2xl font-semibold">Name: {userData.name}</h3>
                <p className="text-xl">Email: {userData.email}</p>
                <p className="text-xl">
                    Member since: {new Date(userData.createdAt).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
};

export default AccountInfo;
