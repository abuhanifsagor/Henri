import React, { useState, useEffect } from "react";
import EventCard from "../../components/EventCard/EventCard";
import { Helmet } from "react-helmet";
import { FaSearch } from "react-icons/fa";

const BrowseAllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [sortBy, setSortBy] = useState(""); // NEW: sort state

  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams();
        if (searchTerm) queryParams.append("search", searchTerm);
        if (sortBy) queryParams.append("sortBy", sortBy);

        const res = await fetch(
          `https://henri-server.vercel.app/allFoods?${queryParams.toString()}`
        );
        const data = await res.json();
        setFoods(data);
      } catch (error) {
        console.error("Error fetching foods:", error);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimeout = setTimeout(() => {
      fetchFoods();
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [searchTerm, sortBy]); // add sortBy to dependency

  return (
    <div className="min-h-screen container mx-auto mt-18">
      <Helmet>
        <title>Henri - All Foods</title>
      </Helmet>

      {/* Hero section */}
      <div className="relative rounded-4xl overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div
          className="h-48 flex items-center justify-center text-white text-5xl font-bold bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/sushi-bar-menu-set-colored-delicious-sushi-rolls-black-plates-top-view_187166-52539.jpg?semt=ais_hybrid&w=740')",
          }}
        >
          <span className="relative z-20">
            All Foods
            <img
              src="https://i.ibb.co/1461HXV/image.png"
              alt=""
              className="w-20 -scale-100 absolute top-1 -right-10 -z-10"
            />
          </span>
        </div>
      </div>

      {/* Header & Search & Sort */}
      <div className="flex flex-wrap md:flex-row items-center justify-between my-6 px-4 gap-4">
        <span className="text-2xl font-extrabold md:text-3xl p-4 hover:border-red-600 border-b-2 duration-600 border-primary rounded-l-full">
          Menu
        </span>

        {/* Search Box */}
        <div
          className={`transition-all duration-500 ease-in-out border-2 border-base-300 shadow-md bg-white md:mx-auto rounded-full overflow-hidden relative ${
            isFocused || searchTerm ? "w-52 md:w-72" : "w-14"
          } h-14 flex items-center`}
          onClick={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          <input
            type="text"
            placeholder="Search foods..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`transition-all duration-500 ease-in-out outline-none px-4 text-md font-bold text-gray-700 bg-transparent w-full ${
              isFocused || searchTerm ? "opacity-100" : "opacity-0"
            }`}
          />
          <FaSearch color="#8c52ff" className=" absolute right-3.5 text-2xl " />
        </div>

        {/* Sorting Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select select-bordered rounded-full w-full lg:w-30 lg:mx-0  md:w-40 mx-auto text-center border-primary text-md  font-semibold"
        >
          <option value="">Default</option>
          <option value="name-asc">Name A-Z</option>
          <option value="name-desc">Name Z-A</option>
          <option value="price-asc">Price Low to High</option>
          <option value="price-desc">Price High to Low</option>
        </select>

        <span className="text-2xl hidden md:block font-extrabold md:text-3xl p-2 px-3 hover:border-red-600 border-2 duration-600 border-primary rounded-full">
          {foods.length}
        </span>
      </div>

      {/* Food List */}
      {loading ? (
        <div className="flex justify-center py-10">
          <button className="btn btn-primary loading">Loading...</button>
        </div>
      ) : (
        <div className="grid mt-10 pb-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {foods.map((food) => (
            <EventCard key={food._id} event={food} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseAllFoods;
