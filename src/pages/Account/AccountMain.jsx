import React, { useContext, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaEdit, FaShoppingBag, FaTruck, FaMapMarkerAlt, FaLock } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AuthContext from "../../components/context/AuthContext";

const AccountMain = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    console.log(user);


    useEffect(() => {
        if (location.pathname === "/account") {
            navigate("/account/info", { replace: true });
        }
    }, [location.pathname, navigate]);

    const menuItems = [
        { path: "/account/info", label: "Account Info", icon: <FaUser /> },
        { path: "/account/update-profile", label: "Update Profile", icon: <FaEdit /> },
        { path: "/account/my-orders", label: "My Orders", icon: <FaShoppingBag /> },
        { path: "/account/return-orders", label: "Return Orders", icon: <FaTruck /> },
        { path: "/account/address", label: "Address", icon: <FaMapMarkerAlt /> },
        { path: "/account/password-change", label: "Password Change", icon: <FaLock /> },
    ];

    return (
        <div>
            <div className="bg-base-100 lg:bg-black">
                <Navbar />
            </div>

            <div className="container w-10/12 mx-auto my-10 flex flex-col sm:flex-col md:flex-row gap-6">
                <div className="bg-white shadow-md rounded-lg p-5 w-full sm:w-full md:w-1/3">
                    <div className="text-center mb-5">
                        <div className="w-20 h-20 mx-auto bg-base-200 rounded-full flex items-center justify-center">
                            {user ? (
                                <img src={user?.photoURL} alt="User Avatar" className="w-full h-full rounded-full object-cover" />
                            ) : (
                                <FaUser size={40} className="text-base-500" />
                            )}
                        </div>

                        <h2 className="text-xl font-bold mt-3">Hello, {user?.displayName}</h2>
                        <p className="text-base-500">Welcome to your account</p>
                    </div>

                    {/* Menu */}
                    <ul className="space-y-2">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`flex items-center px-4 py-3 rounded-md cursor-pointer transition ${location.pathname === item.path ? "bg-blue-100 text-blue-600 font-semibold" : "hover:bg-base-100"
                                        }`}
                                >
                                    <span className="mr-3 text-lg">{item.icon}</span>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content */}
                <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-full md:w-2/3">
                    <Outlet />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AccountMain;
