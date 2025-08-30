import React, { use, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import { useEffect } from "react";
import UpdateTip from "../../Components/UpdateTip/UpdateTip";
import { Helmet } from "react-helmet-async";

const MyTips = () => {
  const { user } = use(AuthContext);
  const allTipsData = useLoaderData();
  const email = user?.email;

  const [myTips, setMyTips] = useState([]);
  const [singleTip, setSingleTip] = useState("");

  
  useEffect(() => {
    if (user?.email) {
      const initialMyTips = allTipsData.filter((tip) => tip.email === email);

      setMyTips(initialMyTips);
    }
  }, [user, allTipsData]);

  const getTableData = (id) => {
    const Tip = myTips.find((tip) => tip._id === id);

    setSingleTip(Tip);
    //.log(singleTip);
  };
  
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://plant-tribe-server.onrender.com/alltips/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingTips = myTips.filter((tip) => tip._id !== id);
              setMyTips(remainingTips);

              Swal.fire({
                title: "Deleted Successfully!",
                text: "Your tip has been deleted.",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <div className=" kala">
        <div className="max-w-6xl mx-auto px-4 py-16 mt-10">
      <Helmet>
        <title>Plant Tribe - My Tips</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center mb-10 big">
        My Garden Tips
      </h1>

      {myTips.length === 0 ? (
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
                <th className="">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myTips.map((tip, index) => (
                <tr key={tip._id} >
                  <td>{index + 1}</td>

                  <td>
                    <div className="w-24 h-18 rounded overflow-hidden">
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
                  <td>
                    
                    <button
                      id={`edit-${tip._id}`}
                      className="btn btn-sm btn-outline btn-info ml-3"
                      onClick={() => {
                        getTableData(tip._id);
                        document.getElementById("my_modal_4").showModal();
                      }}
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
                      onClick={() => handleDelete(tip?._id)}
                      id={`delete-${tip._id}`}
                      className="btn btn-sm btn-outline btn-error mt-1 ml-3 lg:mt-0"
                    >
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
    <UpdateTip setMyTips={setMyTips} singleTip={singleTip} />
    </div>
  );
};

export default MyTips;
