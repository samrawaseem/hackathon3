'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaRegUser, FaRegHeart, FaTimes, FaTimesCircle, FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import fav from './Images/favicoLogo.png';
import { client } from '@/sanity/lib/client';

interface CartItem {
    _id: string;
    name: string;
    price: number;
    image: string;
}

const Header: React.FC = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<string | null>(null);

    useEffect(() => {
        setUser(localStorage.getItem('user'));

        const fetchCartData = async () => {
            try {
                const query = `*[_type == "cart"]{
                    _id,
                    name,
                    price,
                    image
                }`;
                const data = await client.fetch(query);
                setCartItems(data);
            } catch (error) {
                console.error('Error fetching cart data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCartData();
    }, []);

    const deleteCartItem = async (id: string) => {
        try {
            await client.delete(id);
            setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <header className="flex justify-between items-center px-6 md:px-10 lg:px-20 py-4 bg-white shadow-md sticky top-0 z-50">
            {/* Logo */}
            <Link href="/" className="text-3xl font-bold flex items-center">
                <Image src={fav} height={60} width={60} alt="Logo" priority />
                <span className="ml-2">CozyCorner</span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-10 text-lg font-semibold">
                <Link href="/">Home</Link>
                <Link href="/shop">Shop</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
            </nav>

            {/* Icons */}
            <div className="flex gap-6 text-2xl">
                <Link href="/account">
                    {user ? (
                        <Image
                            src="https://avatars.githubusercontent.com/u/160887316?v=4"
                            height={28}
                            width={28}
                            alt="user"
                            className="rounded-full"
                            priority
                        />
                    ) : (
                        <FaRegUser />
                    )}
                </Link>
                <Link href="/search"><IoSearch /></Link>
                <Link href="/wishlist"><FaRegHeart /></Link>
                <button className="relative" onClick={() => setCartOpen(true)}>
                    <AiOutlineShoppingCart />
                </button>
                <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
                    <FaBars />
                </button>
            </div>

            {/* Mobile Menu */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 text-lg z-50">
                    <Link href="/" onClick={() => setSidebarOpen(false)}>Home</Link>
                    <Link href="/shop" onClick={() => setSidebarOpen(false)}>Shop</Link>
                    <Link href="/blog" onClick={() => setSidebarOpen(false)}>Blog</Link>
                    <Link href="/contact" onClick={() => setSidebarOpen(false)}>Contact</Link>
                    <FaTimes className="absolute top-5 right-5 text-3xl cursor-pointer" onClick={() => setSidebarOpen(false)} />
                </div>
            )}

            {/* Shopping Cart Popup */}
            {cartOpen && (
                <div className="fixed top-0 right-0 bg-white shadow-lg w-[90%] md:w-[25vw] p-5 z-50 overflow-y-auto">
                    <div className="flex justify-between items-center border-b pb-4">
                        <h2 className="text-2xl font-semibold">Shopping Cart</h2>
                        <FaTimes className="text-xl cursor-pointer" onClick={() => setCartOpen(false)} />
                    </div>

                    {/* Cart Items */}
                    <div className="py-5 space-y-6">
                        {loading ? (
                            <p>Loading cart items...</p>
                        ) : cartItems.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            cartItems.map((item) => (
                                <div key={item._id} className="flex items-center gap-4">
                                    <Image
                                        src={item.image}
                                        height={80}
                                        width={80}
                                        alt="Product"
                                        className="bg-gray-100 rounded-lg"
                                        priority
                                    />
                                    <div className="flex justify-between w-full">
                                        <div>
                                            <p>{item.name}</p>
                                            <p>1 x <span className="text-[#B88E2F]">Rs. {item.price}.00</span></p>
                                        </div>
                                        <FaTimesCircle
                                            className="cursor-pointer text-xl"
                                            onClick={() => deleteCartItem(item._id)}
                                        />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Cart Footer */}
                    <div className="flex justify-between border-t pt-4 text-lg font-semibold">
                        <p>Subtotal</p>
                        <p className="text-[#B88E2F]">Rs. {subtotal.toLocaleString()}.00</p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 grid grid-cols-3 gap-3">
                        <Link href="/cart" className="border border-black rounded-lg py-2 text-center">View Cart</Link>
                        <Link href="/checkout" className="border border-black rounded-lg py-2 text-center">Checkout</Link>
                        <Link href="/comparison" className="border border-black rounded-lg py-2 text-center">Comparison</Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
