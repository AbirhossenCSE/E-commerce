import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrashAlt, FaCartPlus } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import AuthContext from '../../components/context/AuthContext';
import Footer from '../../components/Footer/Footer';
import Swal from 'sweetalert2';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const res = await axios.get('https://e-commerce-server-jade-six.vercel.app/withlist');
                const userWishlist = res.data.filter(item => item.userEmail === user?.email);
                setWishlist(userWishlist);
            } catch (err) {
                console.error('Error fetching wishlist:', err);
            }
        };

        if (user?.email) {
            fetchWishlist();
        }
    }, [user?.email]);

    const handleRemove = async (id) => {
        const confirm = await Swal.fire({
            title: 'Are you sure?',
            text: 'This item will be removed from your wishlist!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, remove it!',
        });

        if (confirm.isConfirmed) {
            try {
                await axios.delete(`https://e-commerce-server-jade-six.vercel.app/withlist/${id}`);
                setWishlist(prev => prev.filter(item => item._id !== id));

                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Removed from wishlist',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
            } catch (error) {
                console.error("Failed to delete wishlist item", error);
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'error',
                    title: 'Failed to remove item',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
            }
        }
    };

    return (
        <div>
            <Navbar />
            <div className="w-9/12 mx-auto p-6 my-10">
                <h2 className="text-3xl font-bold my-10">Wishlist</h2>
                {wishlist.length === 0 ? (
                    <p className="text-gray-600 text-center">Your wishlist is empty.</p>
                ) : (
                    <div className="grid gap-4 md:px-10">
                        {wishlist.map(item => (
                            <div
                                key={item._id}
                                className="bg-base-300 shadow-sm rounded-lg flex flex-col md:flex-row items-center md:px-18 py-6"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-32 object-contain mb-4 md:mb-0 md:mr-6"
                                />
                                <div className="flex-1 ml-2 text-center md:text-left">
                                    <h3 className="text-2xl mb-2 font-bold">{item.name}</h3>
                                    <p className="text-xl ">{item.price}৳</p>
                                </div>
                                <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-6">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
                                        onClick={() => {
                                            Swal.fire({
                                                toast: true,
                                                position: 'top-end',
                                                icon: 'info',
                                                title: 'Added to cart! (implement logic)',
                                                showConfirmButton: false,
                                                timer: 3000,
                                                timerProgressBar: true,
                                            });
                                        }}
                                    >
                                        <FaCartPlus /> Add to Cart
                                    </button>
                                    <button
                                        onClick={() => handleRemove(item._id)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2"
                                    >
                                        <FaTrashAlt /> Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Wishlist;
