import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaExchangeAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

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
