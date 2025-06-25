import React from "react";
import { Link } from "react-router";

const Faq = () => {
  return (
    <div>
      <section className=" pt-20">
        <div className="flex items-center justify-center">
          <Link to="/all-foods">
            <button className="bg-[#6B1F2A]  cursor-pointer hover:bg-[#7D323E]  px-7 py-3 rounded-full text-white font-medium transition duration-300">
              See More
            </button>
          </Link>
        </div>
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <h1 className="text-4xl font-bold text-center flex items-center justify-center flex-col gap-3">
            Welcome To Henri <br />
            <img
              src="https://ld-wt73.template-help.com/tf/foodoko/chinese/images/icon-02-96x96.png"
              className="w-20 animate-spin "
              alt=""
            />
            Restaurant
          </h1>
          <br />
          <div className="grid  grid-cols-1 gap-8 mt-12 md:grid-cols-2">
            <div>
              <img
                src="https://i.ibb.co/m5wBZ1Bj/image.png"
                alt=""
                className="rounded-2xl w-full"
              />
            </div>
            <div className="flex md:mt-20 flex-col justify-center gap-5">
              <p className=" font-semibold">
                We are happy to help you for a business lunch, family dinner or
                a quick bite. We prepare our dishes in the traditional way and
                serve them fairly quickly on the table. Would you like to
                experience how the dishes in the Far East taste?
              </p>
              <p className="opacity-75 ">
                Then you are welcome every day from{" "}
                <span className="font-[500] text-red-600">
                  11:00 am to 10:30 pm
                </span>
                . Prefer to spoil the family at home? Call & order, it’s
                efficient and fast!
              </p>
              <div>
                <img
                  src="https://i.ibb.co/YMZTbZ9/image.png"
                  alt=""
                  className="rounded-3xl"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-center md:flex-row  items-center md:text-start justify-between gap-5">
            <p className="text-xl max-w-xl font-semibold">
              Enjoy dishes inspired by ancient recipes, a unique wine
              philosophy, innovative cocktail creations, artistic patisserie,
              and iconic design… only at Henri.
            </p>
            <p className="max-w-sm hover:text-red-500 duration-300 cursor-pointer">
              Learn more about us -
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
