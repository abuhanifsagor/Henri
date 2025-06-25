import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="container mx-auto  px-4">
        <Helmet>
          <title>Henri - About</title>
        </Helmet>

        <h1 className="text-3xl py-10 font-bold">
          <span className="text-2xl font-extrabold md:text=3xl p-4 hover:border-red-600 border-b-2 duration-600 border-primary rounded-l-full">
            About
          </span>
        </h1>

        <section className="p-4 lg:p-8">
          <div className="container mx-auto space-y-12">
            {/* Section 1 */}
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row bg-[#1F4B3F] text-white">
              <img
                loading="lazy"
                src="https://img1.wsimg.com/isteam/getty/1947499362/:/cr=t:0%25,l:0%25,w:100%25,h:100%25"
                alt="Restaurant interior"
                className="h-80 w-full object-cover lg:w-1/2"
              />
              <div className="flex flex-col justify-center flex-1 p-6">
                <span className="text-xs uppercase text-gray-300">
                  Welcome to Henri
                </span>
                <h3 className="text-3xl font-bold">
                  Experience Delicious, Freshly Prepared Meals
                </h3>
                <p className="my-6 text-gray-300">
                  At Henri, we take pride in serving the freshest ingredients
                  crafted into mouth-watering dishes. Whether dining in or
                  ordering online, enjoy exceptional flavors and top-notch
                  service every time.
                </p>
                <button
                  type="button"
                  className="self-start px-6 py-2 bg-[#2A6F57] hover:bg-[#359C71] text-white rounded transition duration-300"
                >
                  Explore Menu
                </button>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse bg-[#1F4B3F] text-white">
              <img
                loading="lazy"
                src="https://i.ibb.co/pvNXD6sj/781592-Featured-image-for-Barn2-online-convenience-store-Op2-072420.webp"
                alt="Customer enjoying food"
                className="h-80 w-full object-cover lg:w-1/2"
              />
              <div className="flex flex-col justify-center flex-1 p-6">
                <span className="text-xs uppercase text-gray-300">
                  Order Anytime
                </span>
                <h3 className="text-3xl font-bold">Convenient Online Ordering</h3>
                <p className="my-6 text-gray-300">
                  Our easy-to-use online ordering system lets you enjoy your
                  favorite meals from the comfort of your home. Quick delivery
                  and reliable service guaranteed.
                </p>
                <button
                  type="button"
                  className="self-start px-6 py-2 bg-[#2A6F57] hover:bg-[#359C71] text-white rounded transition duration-300"
                >
                  Order Now
                </button>
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row bg-[#1F4B3F] text-white">
              <img
                loading="lazy"
                src="https://i.ibb.co/hFQDH87v/1633036488-Getty-Images-1295854375.jpg"
                alt="Chef preparing food"
                className="h-80 w-full object-cover lg:w-1/2"
              />
              <div className="flex flex-col justify-center flex-1 p-6">
                <span className="text-xs uppercase text-gray-300">
                  Passion for Quality
                </span>
                <h3 className="text-3xl font-bold">Committed to Excellence</h3>
                <p className="my-6 text-gray-300">
                  Our chefs bring creativity and passion to every dish. We source
                  local ingredients and maintain high standards to ensure every
                  meal delights your taste buds.
                </p>
                <button
                  type="button"
                  className="self-start px-6 py-2 bg-[#2A6F57] hover:bg-[#359C71] text-white rounded transition duration-300"
                >
                  Meet Our Chefs
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <h2 className="mb-8 text-4xl font-bold leading-none text-center">
            Why Choose Henri?
          </h2>
          <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-[#2A6F57]"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Fresh and locally sourced ingredients</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-[#2A6F57]"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Fast and reliable delivery</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-[#2A6F57]"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Warm and welcoming atmosphere</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-[#2A6F57]"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Exceptional customer service</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-[#2A6F57]"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Flexible dining options</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-[#2A6F57]"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Clean and safe environment</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
