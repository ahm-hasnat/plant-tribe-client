import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { Helmet } from "react-helmet-async";

const BrowseTips = () => {
  const publicTips = useLoaderData();
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const [Tips,setTips] = useState([]);
  const handleVisible = showAll ? publicTips : publicTips.slice(0, 4);
  const showTips = Tips.length > 0 ? Tips : handleVisible;
const handleFilter = e=>{
  e.preventDefault();
  const selectedDifficulty = e.target.value;
  console.log(selectedDifficulty);
  
 const filteredTips =  publicTips.filter(data => data.difficulty === selectedDifficulty);
  
   setTips(filteredTips);
   
}
  return (
    <div className="max-w-6xl mx-auto mt-16 px-4 py-10 mb-10">
      <Helmet>
        <title>Plant Tribe - Browse tip</title>
      </Helmet>

      <h1 className="text-3xl font-bold mb-3 big text-center">
        Browse Garden Tips
      </h1>

      <label className="block text-md font-medium big ">
  Filter Tips:
  
  <select onChange={handleFilter} defaultValue="All" 
  className="select select-xs  font-light ml-2  w-24">
    <option value="All">All</option>
    <option value="Easy">Easy</option>
    <option value="Medium">Medium</option>
    <option value="Hard">Hard</option>
  </select>
</label>
      <div className="overflow-x-auto mt-2">
        <table className="table table-zebra shadow-lg rounded-lg">
          <thead className="bg-[#204e51] text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Difficulty</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            { showTips.map((tip, index) => (
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
                  <span
                    className={
                      tip.difficulty === "Easy"
                        ? "text-success font-medium badge badge-outline"
                        : tip.difficulty === "Medium"
                        ? "text-warning font-medium badge badge-outline"
                        : tip.difficulty === "Hard"
                        ? "text-error font-medium badge badge-outline"
                        : "text-base-content"
                    }
                  >
                    {tip.difficulty}
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
            {handleVisible.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center text-gray-500 py-8">
                  No public tips found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {Tips.length === 0 && publicTips.length > 4 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn btn-outline text-[#204e51] border-[#204e51] btn-success"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      )
      
      }
    </div>
  );
};

export default BrowseTips;
