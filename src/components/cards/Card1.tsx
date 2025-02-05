import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface Card1Props {
  img: StaticImageData; // Static imports from ES Module
  title: string;
}

const Card1: React.FC<Card1Props> = ({ img, title }) => {
  return (
    <div className="flex flex-col items-center gap-3 p-4 rounded-lg transition-shadow w-[100%] sm:w-[90%] md:w-[70%] mx-auto">
      {/* Image Section */}
      <figure className="w-[100%] h-[50vh] relative">
        <Image
          src={img} // Use imported image object
          alt={title}
          className="rounded-lg h-[100%] w-[100%]"
        />
      </figure>

      {/* Title Section */}
      <h2 className="text-lg font-semibold text-center">{title}</h2>
    </div>
  );
};

export default Card1;
