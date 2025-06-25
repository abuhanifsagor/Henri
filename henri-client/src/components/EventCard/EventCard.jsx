import React from "react";
import { Link } from "react-router-dom";
import { SiInstacart } from "react-icons/si";
import TiltedCard from "../Cardimg/TiltedCard";

const EventCard = ({ event }) => {
  const {
    _id,
    photoURL,
    foodName,
    category,
    quantity,
    price,
    description,
    origin: country,
    sells,
  } = event;

  return (
    <>
      <div className="w-full relative p-6 pb-20 rounded-4xl shadow-lg min-h-[620px] duration-300 hover:bg-[#ffefea] hover:text-black bg-base-200 ">
        <TiltedCard
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
          imageSrc={photoURL}
          altText={foodName}
          containerWidth="100%"
          imageWidth="100%"
          captionText={category}
          rotateAmplitude={8}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
        />
        <div className="mt-6 mb-2">
          <div className="flex items-center  justify-between ">
            <span className="block text-xs font-medium tracking-w_idest uppercase text-primary">
              {category}
            </span>
            <div className="badge badge-soft badge-secondary">
             Total : {sells}
            </div>
          </div>
          <div className="text-md lg:text-lg font-semibold tracking-w_ide">
            {foodName}
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-gray-500 flex gap-4">
            <span>
              {" "}
              <b>Quantity :</b> {quantity}
            </span>
            <span>
              {" "}
              <b> Country:</b> {country}
            </span>
          </p>
          <p className="text-sm font-semibold text-blue-600">
            Price : {price} <b className="text-green-600">$</b>
          </p>
          <p className="text-sm text-gray-500">
            <b>Description:</b>{" "}
            <span
              dangerouslySetInnerHTML={{ __html: description.slice(0, 120) }}
            />
            ...
          </p>
        </div>
        <div className="absolute bottom-5">
          <Link to={`/foods/${_id}`}>
            <span
              href="#_"
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#F22929] rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#F22929] group-hover:translate-x-0 ease">
                <SiInstacart size={25} />
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-[#F22929] transition-all duration-300 transform group-hover:translate-x-full ease">
                Views Details
              </span>
              <span className="relative invisible"> Views Details</span>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EventCard;
