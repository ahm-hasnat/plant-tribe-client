import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import  { Tooltip } from 'react-tooltip';
import { Helmet } from "react-helmet-async";

const BrowseTips = () => {
  const publicTips = useLoaderData();
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const visibleTips = showAll ? publicTips : publicTips.slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto mt-16 px-4 py-10 mb-10">
       <Helmet>
                <title>Plant Tribe - browse tip</title>
            </Helmet>
      <h1 className="text-3xl font-bold mb-8 big text-center">
        Browse Garden Tips
      </h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra shadow-lg rounded-lg">
          <thead className="bg-[#204e51] text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {visibleTips.map((tip, index) => (
              <tr key={tip._id}>
                <td className="big">{index + 1}</td>
                <td>
                  <div className="w-28 h-20 overflow-hidden rounded">
                    <img
                      src={tip.photo}
                      alt={tip.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </td>
                <td className="font-semibold text-md big">{tip.title}</td>
                <td>
                  <span className="w-36 badge badge-outline badge-accent px-3 py-1 text-sm">
                    {tip.category}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => navigate(`/details/${tip._id}`)}
                    className="btn btn-sm btn-outline btn-info tooltip"
                    data-tip="View Details"
                  >
                    <FaEye />
                  </button>
                  <Tooltip
          anchorSelect={`#view-${tip._id}`}
          place="top"
          clickable
        >
          View Details
        </Tooltip>
                </td>
              </tr>
            ))}
            {visibleTips.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center text-gray-500 py-8">
                  No public tips found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {publicTips.length > 4 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn btn-outline text-[#204e51] border-[#204e51] btn-success"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default BrowseTips;
