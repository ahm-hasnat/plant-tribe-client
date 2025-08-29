import React, { useEffect, useState } from "react";
import { FaTag, FaTags, FaUserAlt } from "react-icons/fa";
import { FaHeart, FaSeedling } from "react-icons/fa6";

const TrendingTips = () => {
  const [tips, setTips] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/tips")
      .then((res) => res.json())
      .then((data) => setTips(data));
  }, []);

  return (
    <section className="pb-20   px-4 md:px-12">
      <div className="flex gap-2 items-center justify-center mb-4">
        <img
          className="w-14"
          src="https://i.ibb.co.com/HLyZdqNH/leaf.png"
          alt=""
        />
        <h2 className="text-3xl md:text-4xl font-bold text-center big ">
          Top trending Tips
        </h2>
      </div>

      <p className="text-center text-md small mb-12 max-w-2xl  mx-auto">
        Discover practical, trending advice from experienced gardeners in our
        community.
      </p>

      <ul className="space-y-8 max-w-4xl mx-auto">
        {tips.map((tip, index) => (
          <li key={index} className="relative pl-6 border-l-4 border-green-200">
            <div className="flex items-start gap-6">
              <FaSeedling className="text-green-700 text-xl mt-1" />

              <div>
                <h3 className="text-lg misti md:text-xl font-semibold
                 big mb-1">
                  {tip.title}
                </h3>
                <p className="small sada text-sm md:text-base 
                leading-relaxed mb-2">
                  {tip.description}
                </p>
                <div className="flex items-center flex-wrap gap-4 text-xs
                 text-gray-500">
                  <span className="flex items-center gap-1 sada">
                    <FaUserAlt className="text-green-600 " /> {tip.author}
                  </span>
                  <span className="flex items-center misti gap-1">
                    <FaHeart className="text-red-400 " /> {tip.likes} likes
                  </span>
                  <span className="flex sada items-center gap-1">
                    <FaTags className="text-yellow-600" /> {tip.category}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrendingTips;


