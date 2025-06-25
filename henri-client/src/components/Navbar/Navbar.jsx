import React, { use, useEffect, useState } from "react";
import logo from "/Logo.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthContextProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  //INFO: LOGIN AND AUTHENTICATION
  const { user, logout } = use(AuthContext);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  useEffect(() => {
    const root = document.documentElement;
    const theme = isDark ? "dark" : "light";
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);
  const handleToggle = () => {
    setIsDark((prev) => !prev);
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logout successful.");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <div className=" shadow-sm  bg-[#E87C82] sticky top-0 z-50">
      <div className="navbar  p-4 container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn  pl-0 bg-transparent border-0 shadow-none text-white hover:text-[#5e0202]  hover:border-transparent
              duration-300 hover:shadow-none lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#f3999d]   text-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/"> Home</NavLink>
              </li>
              <li>
                <NavLink to="/all-foods">All Foods</NavLink>
              </li>
              <li>
                <NavLink to="/gallery">Gallery</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <img loading="lazy" className="w-25 ml-2" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="text-white flex space-x-4">
            <li className="mr-4">
              <NavLink to="/"> Home</NavLink>
            </li>

            <li className="mr-4">
              <NavLink to="/all-foods">All Foods</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>

            <li className="mr-4">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 border border-base-300 rounded-full">
                  <img
                    loading="lazy"
                    alt={user?.displayName}
                    title={user?.displayName}
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/my-profile" className="justify-between">
                    Profile
                    <span className="badge badge-success ">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/add-food">Add Foods</Link>
                </li>
                <li>
                  <Link to="/my-posted-food">My Food,s </Link>
                </li>
                <li>
                  <Link to="/my-orders">My Orders</Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="relative scale-85 md:scale-100 inline-flex items-center justify-center p-2 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-[#2A6F57]">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#1F4B3F] via-[#2A6F57] to-[#16382E]"></span>

              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#359C71] rounded-full opacity-30 group-hover:rotate-90"></span>

              <span className="relative font-bold slsBox cursor-pointer text-white">
                <Link className="py-2 px-2.5 " to="/auth/login">
                  Login
                </Link>
                <span className="mysls">/</span>
                <Link to="/auth/signup" className="cursor-pointer px-2.5 py-2">
                  Sign Up
                </Link>
              </span>
            </div>
          )}
        </div>
        <label className="swap text-white -mr-10 opacity-0 md:opacity-100 md:mr-10 md:ml-5 scale-75 swap-rotate">
          <input onChange={handleToggle} checked={isDark} type="checkbox" />

          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
