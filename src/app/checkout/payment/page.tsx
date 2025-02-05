'use client';

import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { client } from '@/sanity/lib/client';
import axios from 'axios';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface CartItem {
    _id: string;
    name: string;
    price: number;
    image: string;
}

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const query = `*[_type == "cart"]{ _id, name, price, image }`;
                const data = await client.fetch(query);
                setCartItems(data);
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };
        fetchCartData();
    }, []);

    const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)!,
        });

        if (error) {
            setError(error.message || 'Payment failed.');
            return;
        }

        try {
            const response = await axios.post('/api/checkout', {
                amount: subtotal * 100, // Convert to cents
                paymentMethodId: paymentMethod.id,
            });

            if (response.data.success) {
                alert('Payment successful!');
            } else {
                setError('Payment failed. Please try again.');
            }
        } catch (error) {
            console.error('Payment error:', error);
            setError('Payment failed. Please try again.');
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Payment</h2>
            <form onSubmit={handleSubmit}>
                <CardElement className="p-3 border rounded-lg w-full" />
                {error && <p className="text-red-500 mt-2">{error}</p>}
                <button
                    type="submit"
                    disabled={!stripe || !elements}
                    className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg w-full"
                >
                    Pay Rs. {subtotal.toLocaleString()}
                </button>
            </form>
        </div>
    );
};

const PaymentPage = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default PaymentPage;