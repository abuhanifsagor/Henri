import React from "react";
import ReviewSlider from "../ReviewSlider/ReviewSlider";
import Marquee from "react-fast-marquee";
const Testimonial = () => {
  return (
    <div className="mx-5">
      <div className="bg-[#ffdacc] shadow-emerald-200 rounded-4xl py-15 px-10 max-w-5xl   mx-auto ">
        <div className="flex justify-between items-center gap-5 flex-row ">
          <div className="space-y-3 max-w-sm">
            <h4 className="font-bold text-red-500">OUR APPLICATIONS</h4>
            <h1 className="text-3xl font-bold md:pr-15 text-black">
              Simple Way To Ourder Your Food
            </h1>
            <p className="max-w-sm text-stone-500">
              Discover a world of delicious food in just a few clicks and get
              your food delivered right to your doorstep.
            </p>
            <button className="bg-[#6B1F2A]  cursor-pointer hover:bg-[#7D323E]  px-7 py-3 rounded-full text-white font-medium transition duration-300">
              Order Now
            </button>
          </div>
          <div className="hidden md:block">
            <img
              src="https://ld-wt73.template-help.com/tf/foodoko/chinese/images/home-03-353x395.png"
              alt=""
              className="w-full animate-pulse"
            />
          </div>
        </div>

        <div className="mx-auto max-w-sm overflow-hidden -mb-8 w-full">
          <img src="https://i.ibb.co/3myCwG78/image.png" alt="" className="w-full cursor-pointer" />
        </div>
      </div>



      <div className="max-w-3xl mx-auto px-7">
        <ReviewSlider></ReviewSlider>
      </div>
    </div>
  );
};

export default Testimonial;
