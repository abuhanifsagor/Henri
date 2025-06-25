import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import bannerVideo from "../../assets/video.mp4";
import logo from "/Logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center  font-inter text-white w-full">
      <section className="w-full z-30 pb-0">
        <section className="relative w-full   rounded-3xl  pt-10 -mb-10 bg-[#1D232A] overflow-hidden">
          {/* Video Background */}
          <video
            id="bottomvideo"
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover rounded-3xl brightness-50"
          >
            <source src={bannerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Text Content Overlay */}
          <div className="relative  z-20 text-left px-4 sm:px-6 md:px-8  py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="pb-8">
              <h4 className="text-sm sm:text-base md:text-lg font-normal text-gray-400 mb-2">
                PARTNERSHIP
              </h4>
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight sm:leading-tight md:leading-tight mb-4">
                Open Opportunities <br />
                Become a wholesale <br /> partner
              </h1>
              <p className="text-base sm:text-lg  font-normal text-gray-400 mb-2">
                Henri is always looking for new partners .
              </p>
              <button className="mt-5 bg-white text-gray-900 px-6 py-2 sm:px-8 sm:py-3 rounded-full border-2 border-white font-semibold text-sm sm:text-base cursor-pointer transition-all duration-300 ease-in-out hover:bg-transparent hover:text-white shadow-md">
                Join us
              </button>
            </div>
          </div>
        </section>
      </section>

      {/* Footer Section */}
      <footer className="w-full z-10 py-30 pb-8  text-white text-center sm:text-left  bg-[#141414] rounded-t-3xl">
        <div className="flex flex-col sm:flex-row justify-around items-center sm:items-start space-y-8 sm:space-y-0 sm:space-x-8 mb-6">
          {/* Footer Content - Caffique */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              <img src={logo} alt="" className="w-25" />
            </h3>
            <p className="text-sm sm:text-base font-normal text-gray-400">
              The perfect solution for your culinary needs!
            </p>
          </div>

          <div className="text-center sm:text-left">
            <ul>
              {["Shop", "Contact", "Privacy&Policy", "About"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="relative leading-loose cursor-pointer text-gray-400 text-sm sm:text-base font-normal transition-all duration-300 ease-in-out group hover:translate-x-2"
                  >
                    <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                    <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#E87C82] transition-all duration-300 ease-in-out group-hover:w-5"></span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Copyright and Social Links */}
        <div className="flex flex-col sm:flex-row justify-around items-center pt-6 border-t border-gray-700">
          <p className="text-sm sm:text-base font-normal text-gray-400 mb-4 sm:mb-0">
            <span>
              Copyright © {new Date().getFullYear()} - All right reserved by
              <span className="text-[#E87C82]"> Henri</span> 
            </span>
          </p>
          <div className="flex space-x-4 items-center">
            {/* Font Awesome icons */}
            <a
              href="#"
              className="text-xl text-white hover:text-[#E87C82] transition-all duration-300"
            >
              <FaFacebookF></FaFacebookF>
            </a>
            <a
              href="#"
              className="text-xl text-white hover:text-[#E87C82] transition-all duration-300"
            >
              <FaTwitter></FaTwitter>
            </a>
            <a
              href="#"
              className="text-xl text-white hover:text-[#E87C82] transition-all duration-300"
            >
              <FaInstagram></FaInstagram>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
