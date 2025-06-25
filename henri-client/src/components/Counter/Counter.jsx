import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const { ref, inView } = useInView({
    threshold: 0.9, // Adjust threshold as needed, 0.9 means 90% of the element must be visible
  });
  return (
    <div className="scale-90 lg:scale-100">
      <div ref={ref} className="mx-auto rounded-lg md:mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {/* Happy Diners Served */}
          <div className="p-2 md:p-3">
            <h3 className="text-3xl font-bold">
              {inView && <CountUp end={650} duration={2} />} +
            </h3>
            <p className="mt-2 text-sm font-medium text-gray-300">
              Happy Diners Served
            </p>
          </div>
          {/* Positive Reviews */}
          <div className="p-2 md:p-3">
            <h3 className="text-3xl font-bold">
              {inView && <CountUp end={450} duration={2} />} +
            </h3>
            <p className="mt-2 text-sm font-medium text-gray-300">
              Positive Reviews
            </p>
          </div>
          {/* Online Orders Placed */}
          <div className="p-2 md:p-3">
            <h3 className="text-3xl font-bold">
              {inView && <CountUp end={339} duration={2} />} +
            </h3>
            <p className="mt-2 text-sm font-medium text-gray-300">
              Online Orders Placed
            </p>
          </div>
          {/* Years of Culinary Excellence */}
          <div className="p-2 md:p-3">
            <h3 className="text-3xl font-bold">
              {inView && <CountUp end={5} duration={2} />} +
            </h3>
            <p className="mt-2 text-sm font-medium text-gray-300">
              Years of Culinary Excellence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
