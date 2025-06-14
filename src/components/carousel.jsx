import React from "react";
import SimpleSlider from "./slider";
import pic from '../assets/pic1.png';
import yard1 from '../assets/yard1.jpg';
import yard2 from '../assets/yard2.jpg';
import yard3 from '../assets/yard3.jpg';

const images = [
    yard1,
    yard2,
    yard3
]

const Carousel = ({ homeRef }) => {
  return (
    <div
      ref={homeRef}
      className="flex flex-col lg:flex-row mt-[82px] bg-[#dbe9e6] rounded shadow overflow-hidden"
    >
      {/* Left: Text */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-6">
        <h2 className="text-xl lg:text-4xl font-bold mb-4">
          Keeping Your Lawn Picture Perfect
        </h2>
        <p className="text-base lg:text-lg">
          From mowing to edging to weed control, our expert team brings out the best in your yard — every season, every visit.
        </p>
      </div>

      {/* Right: Carousel */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-[#fbf7f5]">
        <SimpleSlider images={images} />
      </div>
    </div>
  );
};

export default Carousel;
