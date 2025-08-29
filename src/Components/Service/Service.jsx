import React from "react";
import CountUp from "react-countup";
import { FaLeaf, FaUserTie, FaUsers, FaStar } from "react-icons/fa"; // React Icons

const Service = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 mb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        <div className="bg-gray-100 kala rounded-xl p-6 text-center 
        shadow-sm hover:shadow-md transition flex flex-col items-center gap-2">

          <div className="text-4xl mb-3 text-green-600">
            <FaLeaf />
          </div>

          <h1 className="text-4xl big font-bold">
            <CountUp end={134} duration={2.75} />+
          </h1>
          <p className="text-gray-600 sada mt-1">Projects Completed</p>
        </div>

        <div
          className="bg-gray-100 kala rounded-xl p-6 text-center 
          flex flex-col items-center gap-2
        shadow-sm hover:shadow-md transition"
        >
          <div className="text-4xl mb-3 text-green-700">
            <FaUserTie />
          </div>

          <h1 className="text-4xl big font-bold">
            <CountUp end={150} duration={3.75} />+
          </h1>
          <p className="text-gray-600 sada mt-1">Gardening Experts</p>
        </div>

        <div className="bg-gray-100 kala rounded-xl p-6 text-center 
        shadow-sm hover:shadow-md transition flex flex-col items-center gap-2">
          <div className="text-4xl mb-3 text-green-800">
            <FaUsers />
          </div>
          <h1 className="text-4xl big font-bold">
            <CountUp end={456} duration={4.45} />+
          </h1>
          <p className="text-gray-600 sada mt-1">Happy Clients</p>
        </div>

        <div className="bg-gray-100 kala white rounded-xl p-6 text-center
         shadow-sm hover:shadow-md transition 2 flex flex-col items-center gap-2">
          <div className="text-4xl mb-3 text-yellow-500 t">
            < FaStar  />
          </div>
          <h1 className="text-4xl big font-bold">
            <CountUp end={972} duration={5.9} />+
          </h1>
          <p className="text-gray-600 sada mt-1">Client Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
