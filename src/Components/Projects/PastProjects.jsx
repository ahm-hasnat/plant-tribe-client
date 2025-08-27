import React from 'react';
import Service from '../Service/Service';

const PastProjects = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold text-primary mb-4">Our Past Projects</h1>
      <p className="text-md text-secondary mb-10">
        Some of our beautiful projects and landscaping works across the country. 
        From lush residential gardens to modern commercial landscapes,<br /> each project
         reflects our commitment to quality, creativity, and sustainability. 
        .
      </p>

      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
       
        <div className="flex flex-col gap-4">
          <img
            src="https://imgur.com/ab1rjLH.jpg"
            alt=""
            className="w-full h-40 md:h-60 object-cover rounded-xl"
          />
          <img
            src="https://imgur.com/Hy8UvYs.jpg"
            alt=""
            className="w-full h-40 md:h-60 object-cover rounded-xl"
          />
        </div>

       
        <div className="flex flex-col gap-4">
          <img
            src="https://imgur.com/XW8qGHV.jpg"
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

       
        <div className="flex flex-col gap-4">
          <img
            src="https://imgur.com/e65eEKe.jpg"
            alt=""
            className="w-full h-40 md:h-60 object-cover rounded-xl"
          />
          <img
            src="https://imgur.com/fqP16PK.jpg"
            alt=""
            className="w-full h-40 md:h-60 object-cover rounded-xl"
          />
        </div>

       
      </div>

     
      <div className="text-center mb-10">
        <button className="btn bg-[#204e51] hover:bg-[#f26b5e] text-white 
        rounded px-8 py-3 transition">
          View More
        </button>
      </div>

     
      <Service />
    </div>
  );
};

export default PastProjects;
