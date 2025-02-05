'use client';

import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

interface Card3Props {
  img: string;
  visible: boolean;
  num: number;
  short: string;
  name: string;
}

const Card3: React.FC<Card3Props> = ({ img, visible, num, short, name }) => {
  return (
    <div
      className={`relative card3Container ${
        visible ? 'card3Visible' : 'card3Hidden'
      }`}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'start',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className={`innerBox absolute flex items-end ${
          visible ? 'flex' : 'hidden'
        }`}
      >
        <div className="leftInnerBox">
          <p className="text-sm md:text-base">
            0{num} {short.slice(0, 10) + '...'}
          </p>
          <h2 className="text-lg md:text-2xl">{name}</h2>
        </div>
        <div className="rightInnerBox btn text-base md:text-xl">
          <FaLongArrowAltRight />
        </div>
      </div>
    </div>
  );
};

export default Card3;
