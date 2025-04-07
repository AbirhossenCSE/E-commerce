import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 py-4">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center lg:text-left">

                    {/* Get In Touch */}
                    <div>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
                        </div>
                        <p className="text-sm mb-2">Address: Dhaka, Bangladesh</p>
                        <p className="text-sm mb-2">Phone: 0123456789</p>
                        <p className="text-sm mb-2">Email: Support@gmail.com</p>
                        <p className="text-sm mb-4">Suterday - Thurseday: 10.00am - 6.00pm</p>
                        <div className="flex justify-center lg:justify-start gap-4">
                            <a href="#" aria-label="Facebook" className="hover:text-white"><FaFacebookF className="text-xl" /></a>
                            <a href="#" aria-label="Instagram" className="hover:text-white"><FaInstagram className="text-xl" /></a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-white"><FaLinkedinIn className="text-xl" /></a>
                            <a href="#" aria-label="Twitter" className="hover:text-white"><FaTwitter className="text-xl" /></a>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Useful Links</h3>
                        <ul className="text-sm space-y-2">
                            {[
                                "Faq",
                                "About us",
                                "How We Works",
                                "Terms and Condition",
                                "Return Policy",
                                "Shipping Policy",
                                "Refund Policy"
                            ].map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="hover:text-white">
                                        <span className="mr-2 text-gray-500">&gt;</span> {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
                        <div className="text-sm">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-4 w-full mb-3 focus:outline-none focus:border-blue-500"
                            />
                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md w-full focus:outline-none">
                                Subscribe
                            </button>
                            <p className="mt-3 text-gray-500">
                                Subscribe to our Newsletter to receive early discount offers, latest news, sales and promo information.
                            </p>
                        </div>

                        {/* Payment Methods */}
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            {[
                                { src: "https://i.ibb.co/s9QW9Zty/bkash.png", alt: "Bkash" },
                                { src: "https://i.ibb.co/s9QW9Zty/nogod.png", alt: "Nagad" },
                                { src: "https://i.ibb.co/s9QW9Zty/rocket.png", alt: "Rocket" },
                                { src: "https://i.ibb.co/s9QW9Zty/upay.png", alt: "Upay" },
                                { src: "https://i.ibb.co/s9QW9Zty/amex.png", alt: "Amex" },
                            ].map((item, idx) => (
                                <img key={idx} src={item.src} alt={item.alt} className="h-8" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="border-t border-gray-700 mt-12 pt-4 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Company Name. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
