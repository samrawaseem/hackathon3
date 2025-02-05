import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

interface PageBgProps {
  name: string; // Props for the page name
}

const PageBg: React.FC<PageBgProps> = ({ name }) => {
  return (
    <div
      style={{
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m1Ro4rX-WSHADndU-eWn9eAaKCsg8SGHfW8wUmvkx5H9p5wum4k3IOD~KjJb2xEINQPpRtV-EDQMUjNbIDifUpEPtEPwW5rdEHLE4S0CdkeoTc3iCpowuSt1B-ZcGLWo-1ruVJr96WiP5Jta7khHGon3g1fwfE7K~ACC-J-kJ-7wcwR2BsqWqvlvdeBwfa2XcelcradIxaUE~dpQgPULx0qdmErp9PxYK41Tkk3ugW4MNbrvvH2wyfyd9sE49VLKmJ~rh83CDSa4jg5u~fThR1t8WLWodhns-1T1OlJjkYgH1CGfzuEf87xJHCHDhrdsmuSK6MG82ReKHZdR0ohV5Q__')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="h-[30vh] w-full flex flex-col justify-center items-center gap-5 p-4 text-center"
    >
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-black">{name}</h1>

      {/* Breadcrumb */}
      <p className="flex items-center gap-2 text-sm md:text-base text-black">
        Home <IoIosArrowForward /> {name}
      </p>
    </div>
  );
};

export default PageBg;
