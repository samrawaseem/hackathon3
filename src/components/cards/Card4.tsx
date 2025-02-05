import Image from 'next/image';
import React from 'react';
import { FaUser, FaCalendar, FaTag } from 'react-icons/fa';

interface Card4Props {
  img: string;
  date: string;
  cate: string;
  title: string;
  desc: string;
}

const Card4: React.FC<Card4Props> = ({ img, date, cate, title, desc }) => {
  return (
    <div className="w-[80%] flex flex-col gap-[1em]">
      <Image
        src={img}
        width={600}
        height={500}
        className="w-[100%] max-h-[600px] rounded-xl"
        alt="featuredds"
      />
      <div className="detailsPub flex gap-[1em] items-center">
        <p className="flex items-center gap-2 text-gray-400">
          <FaUser /> Admin
        </p>
        <p className="flex items-center gap-2 text-gray-400">
          <FaCalendar /> {date}
        </p>
        <p className="flex items-center gap-2 text-gray-400">
          <FaTag /> {cate}
        </p>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>{desc}</p>
      <button className="text-xl border-b border-black pb-2 max-w-max">Read More</button>
    </div>
  );
};

export default Card4;
