// app/api/addToCart/route.ts
import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, price, image } = await request.json();

    const newCartItem = await client.create({
      _type: 'cart', // Specify the content type
      name,
      price,
      image,
    });

    return NextResponse.json(
      { message: 'Product added to cart!', document: newCartItem },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json(
      { message: 'Error adding product to cart', error},
      { status: 500 }
    );
  }
}