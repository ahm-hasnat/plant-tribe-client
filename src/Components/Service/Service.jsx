import React from 'react';
import CountUp from 'react-countup';

const Service = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 mb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
       
        <div className="bg-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
          <div className="text-4xl mb-3">🌿</div>
          <h1 className='text-4xl font-bold'><CountUp end={134} duration={2.75} />+</h1>
          <p className="text-gray-600 mt-1">Projects Completed</p>
        </div>
 <div className="bg-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
          <div className="text-4xl mb-3">🧑‍🌾</div>
         <h1 className='text-4xl font-bold'><CountUp end={150} duration={3.75} />+</h1>
          <p className="text-gray-600 mt-1">Gardening Experts</p>
        </div>

        
        <div className="bg-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
          <div className="text-4xl mb-3">👥</div>
         <h1 className='text-4xl font-bold'><CountUp end={456} duration={4.45} />+</h1>
          <p className="text-gray-600 mt-1">Happy Clients</p>
        </div>

          <div className="bg-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
          <div className="text-4xl mb-3">🌟</div>
          <h1 className='text-4xl font-bold'><CountUp end={972} duration={5.9} />+</h1>
          <p className="text-gray-600 mt-1">Client Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
