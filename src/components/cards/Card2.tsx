'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { FaShareAlt, FaRegHeart } from 'react-icons/fa';
import { MdCompareArrows } from 'react-icons/md';
import Link from 'next/link';

interface Card2Props {
  img: string;
  name: string;
  short: string;
  salePrice: string;
  persent: number;
}

const Card2: React.FC<Card2Props> = ({ img, name, short, salePrice }) => {
  const [visible, setVisible] = useState<'none' | 'flex'>('none');
  const dfs = 1.4;
  const original = Math.round(parseFloat(salePrice) * dfs); // Ensure number conversion
  const addToSanityCart = async () => {
    try {
      const response = await fetch('/api/addToCart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          price: salePrice,
          image: img,
        }),
      });

      // Log the response for debugging
      console.log('Response status:', response.status);

      if (!response.ok) {
        // Handle non-2xx responses
        const errorData = await response.json();
        console.error('Error response from API:', errorData);
        throw new Error(errorData.message || 'Failed to add product to cart');
      }
      alert(name + ' added to cart')
      location.reload()
      
    } catch (error) {
      console.error('Error adding product to Sanity cart:', error);
    }
  };

  const handleAddToCart = () => {
    addToSanityCart(); // Sync with Sanity
  };

  return (
    <div
      className="bg-[#F4F5F7] w-max relative"
      onMouseLeave={() => setVisible('none')}
    >
      <Image
        src={img}
        width={285}
        height={301}
        className="w-[285px] h-[301px] object-cover"
        alt={name}
        onMouseEnter={() => setVisible('flex')}
      />
      <Link href={`/shop/${encodeURIComponent(name.split(' ').join('-'))}`} className="productCardData p-5 pt-4 pb-4">
        <h2 className="text-2xl font-medium">{name}</h2>
        <p>{short.slice(0, 20)}...</p>
        <div className="ProductCardPrice flex justify-between items-center gap-2">
          <p className="text-2xl font-medium">Rs {salePrice}</p>
          <p className="text-lg font-semibold line-through text-gray-600">Rs {original}</p>
        </div>
      </Link>
      <div
        className="Card1Absolute absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center gap-5 bg-black bg-opacity-50 transition-opacity"
        style={{ display: visible }}
      >
        <button className="btn2 text-lg" onClick={handleAddToCart}>Add to cart</button>
        <div className="hoverCard2 flex justify-between items-center gap-4 text-white">
          <p className="flex items-center gap-1 cursor-pointer">
            <FaShareAlt /> Share
          </p>
          <p className="flex items-center gap-1 cursor-pointer">
            <MdCompareArrows /> Compare
          </p>
          <p className="flex items-center gap-1 cursor-pointer">
            <FaRegHeart /> Like
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card2;