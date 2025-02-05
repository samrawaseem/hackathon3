'use client';
import PageBg from '@/components/PageBg';
import TrustComp from '@/components/TrustComp';
import { MdDelete } from 'react-icons/md';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client'; // Import Sanity client
import Link from 'next/link';

interface CartItem {
    _id: string;
    name: string;
    price: number;
    image: string;
}

const Cart = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState(true);

    // Fetch cart data from Sanity
    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const query = `*[_type == "cart"]{
                    _id,
                    name,
                    price,
                    image,
                }`;
                const data = await client.fetch(query);
                setCartItems(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching cart data:', error);
                setLoading(false);
            }
        };

        fetchCartData();
    }, []);

    // Delete item from Sanity cart
    const deleteCartItem = async (id: string) => {
        try {
            // Delete the item from Sanity
            await client.delete(id);

            // Remove the item from the local state
            setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));

            console.log('Item deleted successfully');
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    // Calculate subtotal
    const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <PageBg name={'Cart'} />

            <div className="CartIPageData flex justify-between w-[80vw] m-auto my-[2em]">
                <div className="leftCartPage w-[70%]">
                    <div className="tableCart bg-[#F9F1E7] grid p-4 grid-cols-4">
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>
                    {loading ? (
                        <p>Loading cart items...</p>
                    ) : cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div className="tableCart grid p-4 grid-cols-4 items-center" key={item._id}>
                                <div className="flex tablecartimgsection items-center gap-4">
                                    <Image
                                        src={item.image}
                                        height={140}
                                        width={140}
                                        alt="productimg"
                                        className="bg-[#F9F1E7] rssimagecart p-3 flex justify-between items-center"
                                    />
                                    <p>{item.name}</p>
                                </div>
                                <p>Rs. {item.price}.00</p>
                                <button className="border border-black w-8 h-8">1</button>
                                <div className="flex gap-7 items-center">
                                    <p>Rs. {item.price}.00</p>
                                    <MdDelete
                                        className="text-3xl text-[#B88E2F] cursor-pointer"
                                        onClick={() => deleteCartItem(item._id)}
                                    />
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="rightCartPage bg-[#F9F1E7] flex flex-col gap-7 p-[4em]">
                    <h2 className="text-5xl flextitleCart">Cart Totals</h2>
                    <div className="flex justify-between">
                        <p>Subtotal</p>
                        <p className="text-gray-400">Rs. {subtotal.toLocaleString()}.00</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Total</p>
                        <p className="text-[#B88E2F] text-2xl">Rs. {subtotal.toLocaleString()}.00</p>
                    </div>
                    <Link href={'/checkout'} className="border text-center border-black rounded-full py-2 px-7">Checkout</Link>
                </div>
            </div>

            <TrustComp />
        </div>
    );
};

export default Cart;