import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion"; // for animation
import CircularGallery from "../../components/Cardimg/CircularGallery";
const images = [
  "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg",
  "https://images.pexels.com/photos/7963144/pexels-photo-7963144.jpeg",
  "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg",
  "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg",
  "https://images.pexels.com/photos/31064158/pexels-photo-31064158.jpeg",
  "https://images.unsplash.com/photo-1652465485624-be97a5074683?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg",
  "https://images.pexels.com/photos/9475273/pexels-photo-9475273.jpeg",
  "https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg",
  "https://images.pexels.com/photos/30373424/pexels-photo-30373424.jpeg",
  "https://images.pexels.com/photos/7963144/pexels-photo-7963144.jpeg",
];
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const Gallery = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const openLightboxOnSlide = (index) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index + 1,
    });
  };

  return (
    <div className="w-full min-h-screen bg-base-100">
      {/* <div className="relative mt-18 container mx-auto overflow-hidden rounded-4xl">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div
          className="h-48 flex items-center justify-center text-white text-5xl font-bold bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/sushi-bar-menu-set-colored-delicious-sushi-rolls-black-plates-top-view_187166-52539.jpg?semt=ais_hybrid&w=740')",
          }}
        >
          <span className="relative z-20">
            Gallery
            <img
              src="https://i.ibb.co/1461HXV/image.png"
              alt=""
              className="w-20 -scale-100 absolute top-1 -right-10 -z-10"
            />
          </span>
        </div>
      </div> */}
      <div className="relative min-h-[300px] bg-gradient-to-br from-[#4b1f1f] to-[#6e3a3a] flex items-center justify-center overflow-hidden">
        <h1 className="absolute text-[100px] md:text-[150px] font-black text-white opacity-10 whitespace-nowrap">
          GALLERY
        </h1>

        {/* Center title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white z-10 drop-shadow-md">
          Gallery Page
        </h2>
      </div>
      <h1 className="text-center text-2xl font-bold mt-5 max-w-sm mx-auto px-5">
        Find a food you like and add it to your cart
      </h1>

      <div className="p-6 container mx-auto">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              loading="lazy"
              alt={`Gallery ${index + 1}`}
              className="rounded-lg shadow-lg cursor-pointer hover:scale-102 transition duration-300  ease-in-out"
              onClick={() => openLightboxOnSlide(index)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          ))}
        </Masonry>
      </div>

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={images}
        slide={lightboxController.slide}
      />

      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={2}
          className="text-base-100"
          borderRadius={0.05}
        />
      </div>
    </div>
  );
};

export default Gallery;
