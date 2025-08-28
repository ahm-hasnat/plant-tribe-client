import React, { use } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { BsVectorPen } from "react-icons/bs";

const MyTips = () => {
  const { user } = use(AuthContext);
  const allTipsData = useLoaderData();
  const Name = user?.displayName;

  const allMyTips = allTipsData.filter((tip) => tip.name === Name);

  console.log(allMyTips);

  

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 mt-10">
        


      <h1 className="text-3xl font-bold text-center mb-10 big">
        
        My Garden Tips
      </h1>

      {allMyTips.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven't shared any tips yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra shadow-md rounded-lg">
            <thead className="bg-[#204e51] text-white text-sm">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Availability</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allMyTips.map((tip, index) => (
                <tr key={tip._id}>
                  <td>{index + 1}</td>

                  {/* Image column */}
                  <td>
                    <div className="w-24 h-20 rounded overflow-hidden">
                      <img
                        src={tip.photo}
                        alt={tip.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </td>

                  <td className="font-semibold big ">{tip.title}</td>
                  <td>
                    <span className="badge badge-accent w-36">
                      {tip.category}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        tip.availability === "Public"
                          ? "badge-success"
                          : "badge-warning"
                      }`}
                    >
                      {tip.availability}
                    </span>
                  </td>
                  <td className=" ">
                    <button
                       id={`edit-${tip._id}`}
                      className="btn btn-sm btn-outline btn-info"
                      onClick={() => navigate(`/update/${tip._id}`)}
                    >
                      <FaEdit />
                    </button>
                    <Tooltip
                      anchorSelect={`#edit-${tip._id}`}
                      place="top"
                      clickable
                    >
                      Edit
                    </Tooltip>
                    <button 
                     id={`delete-${tip._id}`}
                    className="btn btn-sm btn-outline btn-error ml-3">
                      <FaTrashAlt />
                    </button>
                    <Tooltip
                      anchorSelect={`#delete-${tip._id}`}
                      place="top"
                      clickable
                    >
                      Delete
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyTips;
