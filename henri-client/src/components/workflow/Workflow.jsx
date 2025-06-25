// HowItWorks.jsx
import React, { useEffect, useState } from "react";

const Workflow = () => {
  const steps = [
    {
      title: "Easy To Order",
      description: "You only need a few steps in ordering food.",

      icon: (
        <img
          src="https://i.ibb.co/VcvvJs9M/image.png"
          alt="Easy To Order"
          className="w-40 h-40"
          loading="lazy"
        />
      ),
    },
    {
      title: "Fastest Delivery",
      description: "Delivery that is always on time, even faster.",
      icon: (
        <img
          src="https://i.ibb.co/s7g6K6c/image.png"
          alt="Fastest Delivery"
          className="w-40 h-40"
          loading="lazy"
        />
      ),
    },
    {
      title: "Best Quality",
      description: "Not only fast but our quality is also number one.",
      icon: (
        <img
          src="https://i.ibb.co/gZNHvvBB/image.png"
          alt="Best Quality"
          className="w-40 h-40"
        />
      ),
    },
  ];
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledDown(window.scrollY > 50); // adjust threshold if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`
        py-15 absolute w-full z-30 rounded-[40px] bg-base-100 px-4
         duration-300 ease-in-out
        ${scrolledDown ? "-top-20" : "-top-10"}
      `}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col gap-4 items-center">
          <p className="text-yellow-500 font-semibold text-sm uppercase mb-2 tracking-widest">
            OUR SERVICE
          </p>
          <img
            className="w-18 h-16"
            src="https://i.ibb.co/tw1QLwRV/icon-01-111x97.png"
            alt=""
          />
          <h2 className="text-4xl font-bold mb-12">How Does It Work?</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center max-w-xs mx-auto"
            >
              <div className="mb-5">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
