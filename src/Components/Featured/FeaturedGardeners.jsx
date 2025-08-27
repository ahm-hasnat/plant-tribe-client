import React from 'react';
import { useLoaderData } from "react-router";

const FeaturedGardeners = () => {
     const gardeners = useLoaderData();
  console.log(gardeners);
    return (
        <section className="pt-10 px-4 md:px-12 ">
        <h2 className="text-3xl md:text-4xl font-bold big text-center  mb-4 mt-8">
          Featured Gardeners
        </h2>
        <p className="text-center small text-md mt-1 mb-12">
          Discover and connect with expert gardeners from across the country. 
          Whether you're just starting out or have years of experience,<br /> there's
          a place for you here.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-8 max-w-6xl mx-auto">
          {gardeners?.map((gardener) => (
            <div
              key={gardener._id}
              className="bg-[#c1e4dc44] kala p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 border border-green-100"
            >
              <img
                src={gardener.avatar || gardener.photo}
                alt={gardener.name}
                className="w-24 h-24 object-cover rounded-full border-4 border-[#3a4b55] mx-auto mb-4"
              />

              <h3 className="text-xl font-semibold text-center big">
                {gardener.name}
              </h3>

              <p className="text-sm text-center sada  text-gray-500 mb-2 mt-2">Location:
                {gardener.location}
              </p>

              <div className="mt-3 text-center text-sm  text-gray-700">
                <p className="font-bold mr-2 text-center sada">Specialty: <span className="badge badge-soft badge-info badge-sm">{gardener.specialty}</span ></p>
              </div>

              <div className="mt-4 text-center font-bold">
                 Status: 
                <span
                  className='inline-block px-3 py-1 text-sm font-bold rounded-full 
                    
                     bg-green-100 text-green-800 ml-3
                     
                  '
                >
                {gardener.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        
      </section>
    );
};

export default FeaturedGardeners;