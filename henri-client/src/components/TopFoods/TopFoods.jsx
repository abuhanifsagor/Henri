import React from "react";
import EventCard from "../EventCard/EventCard";

const TopFoods = ({ tasks }) => {
  return (
    <div className=" container px-4 mx-auto">
      <span className="text-2xl font-extrabold md:text=3xl p-4 hover:border-red-600  border-b-2 duration-600  border-primary  rounded-l-full relative  ">
        Top Foods
        <img
          src="https://i.ibb.co/1461HXV/image.png"
          alt=""
          className="w-20 -scale-100 absolute top-1 -right-10 -z-10"
        />
      </span>
      <div className="grid mt-15 grid-cols-1 md:grid-cols-2   lg:grid-cols-3  gap-4">
        {tasks.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default TopFoods;
