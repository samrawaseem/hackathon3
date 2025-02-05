import React from 'react';
import { GrTrophy } from "react-icons/gr";
import { PiSealCheckBold } from "react-icons/pi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaHandsHelping } from "react-icons/fa";

const TrustComp = () => {
  const trustItems = [
    {
      icon: <GrTrophy className="text-5xl md:text-7xl" />,
      title: "High Quality",
      description: "Crafted from top materials",
    },
    {
      icon: <PiSealCheckBold className="text-5xl md:text-7xl" />,
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      icon: <LiaShippingFastSolid className="text-5xl md:text-7xl" />,
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      icon: <FaHandsHelping className="text-5xl md:text-7xl" />,
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-6 p-8 md:p-12 bg-[#FAF3EA]">
      {trustItems.map((item, index) => (
        <div
          key={index}
          className="trustInner flex items-center gap-3 text-center md:text-left"
        >
          <div className="trustIco">{item.icon}</div>
          <div className="trustText">
            <h2 className="text-xl md:text-2xl font-bold">{item.title}</h2>
            <p className="text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrustComp;
