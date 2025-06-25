import React from "react";
import bannerVideo from "../../assets/video.mp4";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Counter from "../Counter/Counter";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="z-30 relative">
      <div className="h-[90vh]  w-full overflow-hidden">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Navigation, Pagination]}
          className="w-full h-full"
        >
          {/* Slide 1 - Video */}
          <SwiperSlide className="relative flex items-center justify-center   bg-cover bg-center bg-no-repeat">
            <div className="relative w-full h-full">
              <video
                autoPlay
                loop
                muted
                poster="https://i.ibb.co/21NLpwd8/image.png"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={bannerVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="relative items-center px-5 md:items-start container mx-auto z-10 flex flex-col  justify-center h-full text-white">
                <h1 className="lg:text-6xl text-2xl md:text-4xl max-w-3xl text-center lg:text-left font-bold mb-4">
                  Welcome to Henri: Your journey to <br />
                  <i>
                    <Typewriter
                      cursor
                      cursorStyle="🍴"
                      delaySpeed={2000}
                      deleteSpeed={25}
                      loop={0}
                      typeSpeed={70}
                      words={[
                        "Delicious Dishes",
                        "Easy Ordering",
                        "Memorable Meals",
                        "Culinary Delights",
                        "Exceptional Dining",
                        "Taste Difference",
                        "Fresh Ingredients",
                        "Hassle-Free",
                        "Authentic Flavors",
                        "A World of Taste",
                      ]}
                    />
                  </i>
                </h1>
                <p className="text-lg hidden md:block max-w-lg mb-5 items-start opacity-55">
                  Discover Henri's exquisite menu, order your favorites with
                  ease, and embark on a culinary adventure from the comfort of
                  your home.
                </p>
                <div className="flex justify-center md:justify-between max-w-lg mb-5  items-center w-full">
                  <Link to={"/all-foods"}>
                    <button className="bg-[#6B1F2A]  cursor-pointer hover:bg-[#7D323E]  px-7 py-3 rounded-full font-medium transition duration-300">
                      Order Now
                    </button>
                  </Link>
                  <button
                    className="bg-[#D3A66F]  cursor-pointer hover:w-2/8  px-7 py-3 rounded-full font-medium
                    transition 
                    ease-in-out
                    hidden md:block
                    duration-300"
                  ></button>
                </div>
                <div className="scale-80 md:scale-100">
                  <Counter></Counter>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 - Image */}
          <SwiperSlide className="relative flex items-center justify-center  bg-cover bg-center bg-no-repeat">
            <img
              loading="lazy"
              src="https://i.ibb.co/Qvtrq1PZ/image.png"
              alt="Events Around You"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative px-5 container mx-auto z-10 flex flex-col items-start justify-center h-full text-white">
              <p className="font-semibold text-[#7D323E] mb-2">
                #3 Best Restaurant Management Platform
              </p>
              <h1 className="lg:text-7xl max-w-4xl text-5xl tittles font-bold mb-4 ">
                Manage Your Restaurant Effortlessly.
              </h1>
              <p className="text-base mb-5 opacity-70">
                Streamline orders, track top-selling dishes, and deliver a
                delightful experience to your customers — all in one place!
              </p>
              <a href="/all-foods">
                <button className="bg-[#6B1F2A] cursor-pointer hover:bg-[#7D323E] px-7 py-3 rounded-full font-medium transition duration-300">
                  Explore Foods
                </button>
              </a>
            </div>
          </SwiperSlide>

          {/* Slide 3 - Image */}
          <SwiperSlide className="relative flex items-center justify-center  bg-cover bg-center bg-no-repeat">
            <img
              loading="lazy"
              src="https://i.ibb.co/Vc83LBbD/image.png"
              alt="Events Around You"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative px-5 container mx-auto z-10 flex flex-col items-start justify-center h-full text-white">
              <p className="font-semibold text-[#D3A66F] mb-2">
                Real-Time Order & Stock Monitoring
              </p>
              <h1 className="lg:text-7xl max-w-4xl text-5xl tittles font-bold mb-4 ">
                Stay Ahead with Smart Inventory
              </h1>
              <p className="text-base max-w-2xl mb-5 opacity-80 ">
                Never run out of stock again. Keep track of ingredients, food
                items, and order levels in real time — so your kitchen runs
                smoothly and customers are always satisfied.
              </p>
              <a href="/add-food">
                <button className="bg-[#7D323E] text-white cursor-pointer hover:bg-[#6B1F2A] px-7 py-3 rounded-full font-medium transition duration-300">
                  Add New Food
                </button>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
