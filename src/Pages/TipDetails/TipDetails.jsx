import React, { useState } from "react";
import { FaHeart, FaThumbsUp } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import { GiVineLeaf } from "react-icons/gi";
import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";
import { BsArrowThroughHeartFill } from "react-icons/bs";

const TipDetails = () => {
  const { id } = useParams();
  const publicTipsData = useLoaderData();

  const singleTip = publicTipsData.find((tip) => tip._id === id);
  const {
    title,
    plantType,
    difficulty,
    availability,
    photo,
    category,
    description,
    name,
    likes,
    _id,
  } = singleTip;

  const [totalLikes, setTotalLikes] = useState(likes || 0);
  const [liked, setLiked] = useState(false);

  const handleFavorite = (_id) => {
    const updatedLike = totalLikes + 1;
    setLiked(true);

    toast.success("You liked this tip!", {
      style: {
    background: '#d1fae5',  
    color: '#323b40',       
    borderRadius: '8px',
  },
    });
    setTotalLikes(updatedLike);

    fetch(`https://plant-tribe-server.onrender.com/publictips/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ likes: updatedLike }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          fetch(`https://plant-tribe-server.onrender.com/publictips/${_id}`)
            .then((res) => res.json())
            .then((data) => {
              console.log(data.likes);
              setTotalLikes(data.likes);
            });
        }
      });
    setTimeout(() => setLiked(false), 600);
  };
  return (
    <div className=" kala py-16">
        <div className="max-w-3xl mx-auto  p-3 ">
      <h1
        className="text-3xl font-bold text-center mb-2 big flex justify-center
         items-center gap-2 "
      >
        <GiVineLeaf className="text-green-600 text-6xl" />
        Explore Garden Tip
        
      </h1>
      <p className="text-center small text-sm mb-12">
        Discover helpful insights and detailed guidance shared by fellow garden
        enthusiasts.
      </p>

      <div
        className=" bg-base-200 p-6
    rounded-lg shadow-md relative"
      >
        <Helmet>
          <title>Plant Tribe-Tip Details</title>
        </Helmet>
        <div className="flex flex-col gap-4 md:gap-10 ">
          <div className="rounded-xl overflow-hidden ">
            <img src={photo} alt={title} className="w-full   rounded-xl" />
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col items-start pl-4 justify-center gap-2 w-full ">
              <h1 className="text-xl md:text-2xl font-bold mb-2 big flex 
              justify-between w-full text-center">{title}  <span className="badge badge-soft badge-success">
                {availability}
              </span></h1>
              <p className="badge badge-secondary text-sm mb-4">{category}</p>

              <p
                className="mb-3 big  dark:text-gray-300 text-sm
           leading-relaxed font-semibold mr-2 w-full"
              >
                Description :
                <span className="small font-medium ml-2">{description}</span>
              </p>

              <div
                className="grid md:grid-cols-2 grid-cols-1 gap-6 text-sm text-gray-700
           dark:text-gray-300  w-full text-center "
              >
                <p className="big font-semibold">
                  Plant Type :
                  <span className="badge badge-dash  small font-medium ml-2">
                    {plantType}
                  </span>
                </p>
                <p className="big font-semibold">
                  Difficulty :
                  <span className=" badge badge-dash badge-sm small font-medium ml-2">
                    {difficulty}
                  </span>
                </p>
                <p className="big font-semibold">
                  Author :
                  <span className="badge badge-dash small font-medium ml-2">
                    {name}
                  </span>
                </p>
                <div className="flex justify-center items-center gap-4 big font-semibold">
                  <p className="big font-semibold">Total Likes : </p>
                  <span className="flex items-center gap-1 badge badge-dash">
                    <FaHeart className="text-red-600" /> {totalLikes}
                  </span>
                </div>
              </div>
            </div>
           
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center pt-4">
          <button
            onClick={() => handleFavorite(_id)}
            className={`btn btn-lg transition-all duration-300 ease-in-out 
    ${liked ? "animate-bounce bg-blue-100" : ""}`}
          >
            <FaThumbsUp
              className={`text-3xl ${
                liked ? "text-blue-800 scale-110" : "text-blue-600"
              }`}
            />
          </button>
          <Toaster />
        </div>
      </div>
      </div>
    </div>
  );
};

export default TipDetails;
