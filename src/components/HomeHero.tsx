'use client';
import React from 'react';
import Image from 'next/image';
import bg from './Images/bgherosection.jpeg'; // Ensure the correct import path

const HomeHero: React.FC = () => {
  return (
    <div
      className="flex justify-end items-center w-full h-[500px] md:h-[600px] lg:h-[700px] relative"
    >
      {/* Background Image */}
      <Image
        src={bg}
        alt="Hero Background"
        fill
        className="object-cover object-center -z-10"
        priority
      />

      {/* Hero Content */}
      <div className="HeroSectionInner flex flex-col gap-5 px-6 md:px-12 lg:px-20 max-w-2xl">
        <p className="text-lg font-semibold">New Arrival</p>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold" style={{ color: '#B88E2F' }}>
          Discover Our New Collection
        </h2>
        <p className="text-lg font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="btn text-xl md:text-2xl px-6 py-3 bg-[#B88E2F] text-white rounded-lg">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default HomeHero;
