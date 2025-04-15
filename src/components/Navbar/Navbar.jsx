import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaExchangeAlt, FaBars, FaTimes } from "react-icons/fa";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showLogout, setShowLogout] = useState(false);
    const { user, signOutUser } = useContext(AuthContext);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('Sign out successful');
            })
            .catch(() => {
                console.log('Sign out failed');
            });
    };
    const profileRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                setShowLogout(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="bg-white lg:bg-black">
            <div className="text-white w-10/12 mx-auto py-3 px-0 lg:px-6">
                <div className="container mx-auto flex items-center justify-between lg:justify-around">
                    {/* Left: Menu Icon (Small Screens) */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-xl text-black">
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    {/* Left: Logo (Centered on Small Screens) */}
                    <div className="flex items-center text-black lg:text-white">
                        <NavLink to="/" className="flex items-center gap-2">
                            <span className="text-sm tracking-wide">Logo</span>
                        </NavLink>
                    </div>

                    {/* Center: Search Bar (Hidden on Small Screens) */}
                    <div className="flex-1 mx-6 relative hidden lg:block">
                        <input
                            type="text"
                            placeholder="Search Products"
                            className="w-full bg-white px-4 py-4 text-black rounded-sm"
                        />
                        <FaSearch className="absolute right-4 top-3 text-gray-500 cursor-pointer" />
                    </div>

                    {/* Right: Navigation Icons */}
                    <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-6">
                            <NavLink to="/compare" className="flex items-center gap-1 text-black lg:text-white">
                                <FaExchangeAlt />
                                <span className="hidden lg:inline">Compare</span>
                            </NavLink>

                            <NavLink to="/wishlist" className="flex items-center gap-1 text-black lg:text-white">
                                <FaHeart />
                                <span className="hidden lg:inline">Wishlist</span>
                            </NavLink>

                            <NavLink to="/cart" className="flex items-center gap-1 text-black lg:text-white">
                                <FaShoppingCart />
                                <span className="hidden lg:inline">Cart</span>
                            </NavLink>
                            <NavLink to="/account" className="flex items-center gap-1 text-xl text-black lg:text-white">
                                <FaUser />
                                <span className="hidden lg:inline">Account</span>
                            </NavLink>
                        </div>

                        {/* User Auth - Show Sign In or Profile Picture */}
                        {user ? (
                            <div className="relative">
                                <img
                                    src={user.photoURL || "https://i.ibb.co/rHt3GqM/avatar.png"}
                                    alt="User Avatar"
                                    className="w-10 h-10 rounded-full border cursor-pointer"
                                    onClick={() => setShowLogout(!showLogout)}
                                />
                                {showLogout && (
                                    <div className="absolute right-0 mt-2 bg-white text-black p-2 rounded shadow-md z-10" ref={profileRef}>
                                        <button onClick={handleSignOut} className="text-sm hover:text-red-600">Logout</button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to="/signin" className="btn bg-gray-700 text-white">Sign-In</Link>
                        )}

                    </div>
                </div>

                {/* Search Bar on Small Screens */}
                <div className="lg:hidden mt-4 relative">
                    <input
                        type="text"
                        placeholder="Search Products"
                        className="w-full bg-base-300 px-4 py-4 text-black rounded-sm"
                    />
                    <FaSearch className="absolute right-4 top-3 text-gray-500 cursor-pointer" />
                </div>


                {/* Menu Links on Small Screens */}
                {menuOpen && (
                    <div className="lg:hidden mt-4">
                        <NavLink to="/wishlist" className="block py-2 text-black">Wishlist</NavLink>
                        <NavLink to="/compare" className="block py-2 text-black">Compare</NavLink>
                        <NavLink to="/cart" className="block py-2 text-black">Cart</NavLink>
                        <NavLink to="/account" className="block py-2 text-black">Account</NavLink>
                        <NavLink to="/contact" className="block py-2 text-black">Contact</NavLink>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Navbar;
