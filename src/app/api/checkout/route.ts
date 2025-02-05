import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-01-27.acacia",
  });

export async function POST(req: NextRequest) {
    try {
        const { amount, paymentMethodId } = await req.json();

        if (!amount || !paymentMethodId) {
            return NextResponse.json({ success: false, error: 'Invalid request data' }, { status: 400 });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method: paymentMethodId,
            confirm: true,
        });

        return NextResponse.json({ success: true, paymentIntent }, { status: 200 });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        return NextResponse.json({ success: false, error: errorMessage }, { status: 400 });
    }
}
