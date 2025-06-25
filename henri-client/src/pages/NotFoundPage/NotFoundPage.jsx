import React from "react";
import error from "../../assets/404-error.gif";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
  return (
    <div>
      <Helmet>
        <title>Freeio - Not Found</title>
      </Helmet>
      <div className="flex  flex-col items-center justify-center min-h-screen bg-white">
        <img loading="lazy" src={error} alt="Error" />
        <h2 className=" text-2xl -mt-11 lg:-mt-32 lg:text-4xl text-gray-800 font-semibold">
          Look like you're lost 😕
        </h2>
        <p className="mt-2 text-gray-600">
          The page you are looking for does not exist.
        </p>
        <a href="/" className="relative scale-75 inline-block text-lg group">
          <span className="relative mt-3 z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Go home</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
