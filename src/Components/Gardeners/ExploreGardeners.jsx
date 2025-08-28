import React from "react";
import { useLoaderData } from "react-router";
import {
  FaMapMarkerAlt,
  FaUser,
  FaLeaf,
  FaStar,
  FaCalendarAlt,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const ExploreGardeners = () => {
 const allGardeners = useLoaderData();


  return (
    <div className="max-w-6xl mx-auto px-6 py-12 mt-12">
         <Helmet>
                <title>Plant Tribe - Explore gardener</title>
            </Helmet>
      <h1 className="text-4xl font-bold text-center mb-4 big">
        Meet Our Gardeners
      </h1>
      <p className="text-center small mb-12 max-w-3xl mx-auto">
        Explore our passionate community of gardeners from around the world.
        Learn about their specialties, experience, and gardening journeys.
      </p>

      <div
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 
      md:grid-cols-3 lg:grid-cols-3"
      >
        {
        allGardeners.map((i) =>(
            <div
              key={i._id}
              className="card bg-base-100 shadow-lg hover:shadow-xl 
              transition-shadow duration-300 "
            >
              <div className="card-body bg-[#c1e4dc5d] rounded-xl">
              
                <div className="flex items-center space-x-4 mb-4">
                  <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                      <img src={i.photo} alt={i.name} />
                    </div>
                  </div>
                  <div>
                    <h2 className="card-title">{i.name}</h2>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <FaMapMarkerAlt className="text-red-500" /> {i.location}
                    </p>
                  </div>
                </div>

              
                <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <FaUser className="text-pink-500" />
                    <span>{i.gender}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt className="text-indigo-500" />
                    <span>{i.age} yrs</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaLeaf className="text-green-600" />
                    <span>{i.specialty}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{i.totalSharedTips} tips</span>
                  </div>
                </div>

                <p className="text-sm small font-medium line-clamp-4 mb-4">
                  {i.experiences}
                </p>

            
                <div className="card-actions justify-between items-center">
                  <span
                    className={`badge ${
                      status === "active" ? "badge-success" : "badge-error"
                    } uppercase font-bold`}
                  >
                    {i.status}
                  </span>
                  <button
                    className="btn btn-sm btn-primary"
                   
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ExploreGardeners;
